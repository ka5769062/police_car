var run = setInterval(car,50);
margin = 0;

function car(){

  if(margin == 1200){

    clearInterval(run);   
    run = setInterval(car,50);
    margin = 0;
}
    
else{

 margin += 5;
 var x = document.getElementById('policecar');
 x.style.marginLeft = margin+"px";  
 var z = document.getElementById("siren");
 z.play();
 



  }



}


