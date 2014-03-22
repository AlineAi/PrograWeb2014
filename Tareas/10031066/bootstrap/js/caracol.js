$(document).ready(
	function(){		
		$('#iniciar').click(
			function(){
				var myVar=setInterval(function(){myTimer()},1000);
				var prof;
				var sube;
				var baja;
				var dia=true;
				var dias=0;
				var proporcion=300/parseInt(document.getElementById('prof').value);
				
				prof=document.getElementById('prof').value;
				sube=document.getElementById('sube').value;
				baja=document.getElementById('baja').value;
				
				function myTimer(){
					actual =parseInt($('#cosmo').css('top').slice(0,$('#cosmo').css('top').length-2));
					if(actual>0){
						if(dia){				
							actual=(actual-(proporcion*sube))+ "px";
							dias++;
							document.getElementById("dias").innerHTML='Dias:'+dias;
						}
						else{
							actual=(actual+(proporcion*baja))+ "px";
						}
						dia=!dia;
						$('#cosmo').css('top',actual);
					}
				}
			}
		
		
		);
		
	}
);

