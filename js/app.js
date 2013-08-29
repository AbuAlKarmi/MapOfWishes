var App = (function (){
	var map;
	var marker;
	// var userLocation;

	var initializeMap = function(mapId){
		map = L.mapbox.map('map', mapId)
						.on('click',onMapClick);

		marker = L.marker();
	}

	var initializeParse = function(appId,javascriptId){
		Parse.initialize(appId,javascriptId);
	}

	var getCurrentLocation = function(){
		if (navigator.geolocation)
	    {
	    	navigator.geolocation.getCurrentPosition(setUserLocation);
	    }else{
	    /*	userLocation = {
				latitude : 37.9,
				longitude : -77
			};*/
	    }
	}

	var setUserLocation = function(location){
		map.setView([location.coords.latitude,location.coords.longitude],4)
	}

	// var getUserLocation = function(){
	// 	return userLocation;
	// }

	//save a wish
	var saveUserWish = function(name,wish,lon,lat){
		var wishLocation = new Parse.GeoPoint( lat , lon );

		var UserWish = Parse.Object.extend("UserWish");
		var userWish = new UserWish();
		userWish.save(
			{ 
				name 		: name,
				wish 		: wish,
				location 	: wishLocation,
			}, 
			{
				success: function(obj) {
					saveSuccess(obj);
				},
				error: function (obj){ 
				  	//Error
				}
			});
	}

	var saveSuccess = function(obj){
		$('#wishModal').modal('hide');
		addMarker( 
			obj.attributes.location.latitude,
			obj.attributes.location.longitude,
			obj.attributes.name,
			obj.attributes.wish,
			true
			);
	}

	//Get all wishes from the server
	var getWishes = function(){
		var UserWish = Parse.Object.extend("UserWish");
		var query = new Parse.Query(UserWish);
		query.find({
			success: function(results) {
			    // results is an array of Parse.Object.
			  	setWishesOnMap(results);
			},

			error: function(error) {
			    // error is an instance of Parse.Error.
			}
		});
	}

	//Show wishes on map after retrive them.
	var setWishesOnMap = function(results){
		for (var i = results.length - 1; i >= 0; i--) {
			addMarker(
				results[i].attributes.location.latitude,
				results[i].attributes.location.longitude,
				results[i].attributes.name,
				results[i].attributes.wish
				);
		}
	}


	//Add New Marker contains the wish, isOpened determine the status of popup
	var addMarker = function(lat,lon,name,wish, isOpened){
		var marker = new L.marker([lat,lon],{title:name})
							.bindPopup('<strong>'+name + " wish : </strong><p>"+wish+"</p>")
							.addTo(map);
		if(isOpened == true){
			marker.openPopup();
		}
	}

	var onMapClick = function(e){
		$('#wishModal').modal('show');
		$('.new-wish-form #lat').val( e.latlng.lat );
		$('.new-wish-form #lon').val( e.latlng.lng );
		$('#wishModal .modal-body').html( $(".new-wish-form").html() );
	}

	var initButtons = function(){
		$(document).on('click','.submit-wish', function(){
			$(this).parents('#wishModal').find('form.wishForm').submit();
		});
	}

	var initForms = function(){
		$(document).on('submit','form.wishForm',function(e){
			saveUserWish( 
				$('#name', $(this) ).val(),
				$('#wish', $(this) ).val(),
				parseFloat( $('#lon', $(this) ).val() ),
				parseFloat( $('#lat', $(this) ).val() ) 
			 );
			e.preventDefault();
		});
	}

	return { 
		init : function(){
			getCurrentLocation();
			// Initialize 

			initializeParse( _config.parse.appId, _config.parse.javascriptId);
			initializeMap(_config.map.mapId);

			//Bind Events
			initButtons();
			initForms();


			//Get all wishes
			getWishes();
		},
		saveWish : function(name,wish,lon,lat){
			saveUserWish(name,wish,lon,lat);
		}
	}
})();