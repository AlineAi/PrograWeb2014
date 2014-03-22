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
		
		$('#i1').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i2').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i3').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i4').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i5').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i6').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i7').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i8').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		$('#i9').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
		
		var myVar=setInterval(function(){myTimer()},2000);

			function myTimer(){
				$('#img').attr("src","images/img"+parseInt((Math.random()*22)+1)+".png");
			}
		
		
    }
);