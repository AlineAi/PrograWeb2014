$(document).ready(
	function(){
		var myVar=setInterval(function(){myTimer()},3000);
		var numero;
		function myTimer(){
			numero=parseInt(Math.random()*53+1);
			$('#Juego').attr('src',"img/" + numero +".jpg");
		}
		
		$('img').click(
			function(){
				//alert($(this).attr('class') +"    "+numero);
				if($(this).attr('class')==numero){
					$(this).fadeTo("slow",0.5,function(){});
				}
			}
		);
		
		var variable;
		for(i=1;i<10;i++){
			variable=parseInt(Math.random()*53+1);
			$("#j"+i).attr('src',"img/" + variable +".jpg");
			$("#j"+i).attr('class',variable);			
		}		
	}
);