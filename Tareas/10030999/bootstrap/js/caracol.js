var timer = 0;


function setResetInterval(bool){
  
  
  if(bool){
      back=document.getElementById('fondo')
        timer = setInterval(function(){
        back.src="b_dia.png";
      setTimeout(function(){
        back.src="b_noche.png";
      },1000);
    },2000);
  }else{
    clearInterval(timer); 
  }
}

// $("#Start").click(function(e){
//   e.preventDefault();
//   setResetInterval(true);
// });

// $("#Stop").click(function(e){
//   e.preventDefault();
//   setResetInterval(false);
// });




 
 // el.css("background-image", "url(background_dia.png)");
 // el.css("background-image", "url(background_noche.png)");


// var bg = $("#fondo");

//   if(bool){
//         timer = setInterval(function(){
//         bg.css('background-image':'url(background_dia.png)');
//       setTimeout(function(){
//         bg.css('background-image':'url(background_noche.png)');
//       },3000);
//     },6000);
//   }else{
//     clearInterval(timer); 
//   }
// }

// $("#start").click(function(e){
//   bg.preventDefault();
//   myFunction(true);
// });
// $("#stop").click(function(e){
//   bg.preventDefault();
//   myFunction(false);
// });
// }

/*var bg = $("#fondo");

  if(bool){
        timer = setInterval(function(){
        bg.css('background-image':'url(background_dia.png)');
      setTimeout(function(){
        bg.css('background-image':'url(background_noche.png)');
      },3000);
    },6000);
  }else{
    clearInterval(timer); 
  }
}

$("#start").click(function(bg){
  bg.preventDefault();
  cambiaFondo(true);
});
$("#stop").click(function(e){
  bg.preventDefault();
  cambiaFondo(false);
});*/