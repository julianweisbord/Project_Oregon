$(document).ready( function() { 
	init_account();





 });

function init_account(){
	$('#profilejs').hide(); 
	$('.profile_button').mouseover(
		function(){

			$('#profilejs').show();


		}

	)
	 $('.account').mouseleave(
	 	function(){
	 		$('#profilejs').hide(); 

	 	}
	 )	
}