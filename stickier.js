(function ( $ ) {
 
	$.fn.stickier = function() {
		
		var $el = $(this); 
	
		function sticky() {
			var $stickier = $('#stickier-fixed');
			
			if(!$stickier.length) {
				
				var $parent = $el.parent();
				
				$parent.append('<div id="stickier-fixed"></div>');
				$stickier = $('#stickier-fixed');
				$stickier.css('position', 'fixed').css('z-index', '9999').css('top', '0');
				$el.clone().appendTo($stickier);
			}	
			
		}
	
		function unSticky() {
			var $stickier = $('#stickier-fixed');
			
			if($stickier.length)
				$stickier.remove();
		}
	
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();
			var elemTop = elem.offset().top;
			var elemBottom = elemTop + elem.height();
			var $visible = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
			
			if($visible)
				unSticky();
			else if(!$visible)
				sticky();
		}
		
		$( window ).scroll(function() {
			isScrolledIntoView($el);
		});
		
		return this;
	};
 
}( jQuery ));