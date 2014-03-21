$(document).ready(
  function(){
       var flag=0;
		$('img').click(
		  function(){
			  if (flag==0) {
			 	 $(this).animate({left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'});  
			  }
			  else{
			  	 $(this).animate({left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'});
			  }
			  
		 }
		);
		
		$('img').attr("src","images/"+parseInt((Math.random())*30)+".jpg");


		
		
    }
);



//$('img').attr("src","3.jpg");
