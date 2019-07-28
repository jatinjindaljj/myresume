var navg = document.getElementsByTagName('nav');
nav = navg[0];

var links = document.querySelectorAll('nav>div')

var screen = document.querySelectorAll('.screen')

var boardtext = document.querySelector('.boardtext')

var boardimage = document.querySelector('.boardimage')

var board = document.querySelector('.board')




///// initial start 



boardtext.innerHTML = links[1].innerHTML;

TweenMax.to(nav,0,{y:-110});

for(var i = 0 ; i < screen.length  ; i ++ )
    {
             
        if(screen[i].classList[0] == 2){

            screen[i].style.display = "block";

        }
        else
          screen[i].style.display = "none";

}

TweenMax.to(boardimage , 0 , {rotation:180});

//////////////////////////////////////

function rotateandbringdown(){

    if(boardimage.style.cssText.split('(')[1].split(',')[0]==-1){
        TweenMax.to(boardimage , 0.3 , {rotation:0})
        TweenMax.to(nav,0.3,{y:board.getBoundingClientRect().height});
    }

    else{
        TweenMax.to(nav, 0.3 , {y:-110});
        TweenMax.to(boardimage , 0.3 , {rotation:180});
    }
  }

boardimage.addEventListener('click',rotateandbringdown);

/////////////////////////////////////////

function rotateandbringupshow(event){

    TweenMax.to(nav, 0.3 , {y:-110});
    TweenMax.to(boardimage , 0.3 , {rotation:180});
    boardtext.innerHTML = event.target.innerHTML;

    for(var i = 0 ; i < screen.length  ; i ++ )
    {
             
        if(screen[i].classList[0] == event.target.id){

            screen[i].style.display = "block";

        }
        else
        screen[i].style.display = "none";

    }



  }



for(var i=0 ; i<links.length ; i++){
    links[i].addEventListener('click',rotateandbringupshow);
  }
    













///////////////////////////////////  ignore it  /////////////////////////

function showhide( event ){

    boardtext.innerHTML = event.target.innerHTML;

    for(var i = 0 ; i < screen.length  ; i ++ )
    {
             
        if(screen[i].classList[0] == event.target.id){

            screen[i].style.display = "block";

        }
        else
        screen[i].style.display = "none";

    }

    console.log(event.target.id);
   

}

//// eventlistner for show hide
for(var i=0 ; i<links.length ; i++){

links[i].addEventListener('click',showhide);


}


//////////////////////pdf opener/ ///

