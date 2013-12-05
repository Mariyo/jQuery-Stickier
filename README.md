jQuery-Stickier

===============


Stickier - jQuery plugin to stick! or stuck! selected element not visible after scrolling

```html
<!DOCTYPE html>
<html>
	<head>
	
		<!-- Do not forget jQuery -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

		<!-- Include Stickier -->
		<script  type="text/javascript" src="../stickier.js"></script>
		
		<!-- Stickier initializing -->
		<script>
			$(document).ready(function(){
				
				$('.sticky').stickier();
  
			});
		</script>

		<!-- Some CSS of your content -->
		<style type="text/css" media="all">
			.
			.
			.
		</style>

	</head>

	<body>
		.
		.
		.
		.
		.
		.
		.
		<div class="sticky">Sticky Element</div>
		.
		.
		.
		.
		.
		.
		.
	</body>
</html>
```