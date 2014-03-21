$(document).ready(
  function(){
       var flag=0;
		$('img').hover(
		  function(){
			  if (flag==0) {
			 	 $(this).fadeTo( "fast", 0.9); flag=1;  
			  }
			  else{
			  	 $(this).fadeTo("fast",0.1); flag=0;
			  }
			  
		 }
		);
		
		$('#img1').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
		$('#img2').attr("src","images/"+parseInt((Math.random()*30)+1)+".jpg");
		$('#img3').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
		$('#img4').attr("src","images/"+parseInt((Math.random()*30)+1)+".jpg");
		$('#img5').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
		$('#img6').attr("src","images/"+parseInt((Math.random()*30)+1)+".jpg");
		$('#img7').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
		$('#img8').attr("src","images/"+parseInt((Math.random()*30)+1)+".jpg");
		$('#img9').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
		
		var myVar=setInterval(function(){myTimer()},3000);
		var myVar=setInterval(function(){myTimer2()},5000);

			function myTimer(){
				$('#imglol').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");

				$('#img1').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img2').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img3').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");

			}
			function myTimer2(){
				$('#img5').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img6').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img4').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
			}
		
		
    }
);



