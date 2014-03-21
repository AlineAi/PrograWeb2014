$(document).ready(
  function(){
       var flag=0;
		$('img').click(
		  function(){
			  if (flag==0) {
			 	 $(this).fadeTo( "fast", 0.3); flag=1;  
			  }
			  else{
			  	 $(this).fadeTo("slow",1); flag=0;
			  }
			  
		 }
		);
		
		$('#1').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#2').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#3').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#4').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#5').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#6').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#7').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#8').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		$('#9').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
		
		var myVar=setInterval(function(){myTimer()},3500);

			function myTimer(){
				$('#imglol').attr("src","img/"+parseInt((Math.random()*12)+1)+".jpg");
			}
		
		
    }
);
