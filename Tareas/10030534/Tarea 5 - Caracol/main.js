var timer = 0;
var dia;
var sube;
var baja;
var posicion = 750;
var dias=0;
var where;
var elem;


function Valida(bool){

        sube = document.getElementById('Sube').value * 50;
        baja = document.getElementById('Baja').value * 50;
        


     if(sube<=baja){

      window.alert("El caracol nunca va a salir, debe subir mas de lo que retrocede!");
      

     }
     
     else{


       Tiempo(true);


     }


}

function Tiempo(bool){
 if(bool){
  timer = setInterval(function(){
  dia=true;
  dias+=1;
  var back=document.getElementById('fondo'); 
      back.src="b_dia.png";
      posicion=posicion-sube;
      
      
      $("#caracol").animate({"top":posicion+"px"}) 
      elem= document.getElementById('caracol').offsetTop;
      
      
      

      if(elem <= 500){

        var etiqueta=document.getElementById('down')
        etiqueta.innerHTML="Dias que tardo en subir: "+dias;
        clearInterval(timer); 

      }
    

   setTimeout(function(){  
      dia=false;
      var back=document.getElementById('fondo'); 
      back.src="b_noche.png";
      posicion=posicion+baja;

      
      $("#caracol").animate({"top":posicion+"px"})
      elem= document.getElementById('caracol').offsetTop; 
      
      

    
     

       },3000);
   

    },6000);

  }else{

    
    clearInterval(timer); 
  
  }

}



    



