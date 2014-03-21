$(document).ready(
  function(){
       var flag=0;
		$('img').hover(
		  function(){
			  if (flag==0) {
			 	 $(this).animate({left:'250px',
   					 opacity:'0.5',
   					 height:'150px',
    				 width:'150px'});; flag=1;  
			  }
			  else{
			  	 $(this).animate({left:'250px',
    				opacity:'0.9',
    				height:'250px',
    				width:'150px'});; flag=0;
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
		
		var myVar=setInterval(function(){myTimer()},3150);
		var myVar=setInterval(function(){myTimer1()},2700);
		var myVar=setInterval(function(){myTimer2()},2200);
		var myVar=setInterval(function(){myTimer3()},1250);

			function myTimer(){
				$('#imglol').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
			}
			function myTimer1(){
				$('#img1').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img2').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img3').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");

			}
			function myTimer2(){
				$('#img4').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img5').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img6').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
			}

			function myTimer3(){
				$('#img7').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img8').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
				$('#img9').attr("src","images/"+parseInt((Math.random()*31)+1)+".jpg");
			}
		
		
    }
);



