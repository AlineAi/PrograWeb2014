$(document).ready(
	function(){
		$('img').click(
			function(){
				var $img = $(this);
				$(this).attr('src', $(this).attr('src') + 'R' ); 
			}
			
		);
	}
	
);