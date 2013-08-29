<!DOCTYPE html>
<html lang="en">
<head>
	<title>Map Of Wishes</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<script src='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.js'></script>
	<link href='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.css' rel='stylesheet' />
  	<!--[if lte IE 8]>
    	<link href='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.ie.css' rel='stylesheet' >
    <![endif]-->
    <style type="text/css">
    .map-container{
    	margin-top: 50px;
    }
    #map {
    	width:100%;
    	height:530px;
    }
    </style>
</head>
<body cz-shortcut-listen="true">
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Map Of Wishes</a>
			</div>
		</div>
	</div>
	<div class="clearfix"></div>
	<div class="container map-container">
		<div class="row">
			<div class="col-md-12">
				<div id="map"></div>
			</div>
		</div>	

		<hr>
		<footer>
			<p>This demo developed by Mohammad Karmi <?php echo date('Y'); ?></p>
		</footer>
	</div>

	<div class="new-wish-form hidden">
		<form class='wishForm' role='form' class='form-horizontal'>
			<input type='hidden' name='lon' id='lon'>
			<input type='hidden' name='lat' id='lat'>


			<div class="form-group">
			    <label for="name">Name</label>
			    <input type="text" class="form-control" name='name' id="name" placeholder="Name..">
			</div>

			<div class="form-group">
			    <label for="wish">Wish</label>
			    <textarea class="form-control" rows="3" id='wish' name='wish' placeholder='User wish..'></textarea>
			</div>



		</form>
	</div>

	<div class="modal-wrapper">
		<div class="modal fade" id='wishModal'>
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		        <h4 class="modal-title">Make a wish</h4>
		      </div>
		      <div class="modal-body">
		        
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary submit-wish">Wish</button>
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
	</div>


	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script type="text/javascript" src='js/bootstrap.min.js'></script>
	<script src="http://www.parsecdn.com/js/parse-1.2.9.min.js"></script>
	<script src='//api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.js'></script>
	<script src='js/config.js'></script>
	<script src='js/app.js'></script>

	<script type="text/javascript">
		
	$(document).ready(function() {
		App.init();
	});
	
	</script>

</body>
</html>