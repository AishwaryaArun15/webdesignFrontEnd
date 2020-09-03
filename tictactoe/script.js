var track =0;
var p1=0;
var p2=0;
var player=1;
var num = [1,2,3,4,5,6,7,8,9];
function play()
{   function endgame(p1, p2){
    var board =document.querySelector('.board');
    var endScreen =document.querySelector('.end');
    board.classList.add('hide');
    endScreen.classList.add('seek');
    if(p1==1)
    endScreen.innerHTML='<h1><i class="fa fa-times" aria-hidden="true"></i> Won!</h1><p>Press  <i class="fas fa-redo"></i>  to restart</p>';
    if(p2==1)
    endScreen.innerHTML='<h1><i class="far fa-circle"></i> Won!</h1><p>Press  <i class="fas fa-redo"></i>  to restart</p>';
    if(track==9 && p1==p2)
    endScreen.innerHTML='<h1>It is a Draw! </h1><p>Press  <i class="fas fa-redo"></i>  to restart</p>';
}
    var box= document.querySelectorAll('#box');
    box.forEach(function(b)
    {
        b.addEventListener('mouseover',()=>
        {//console.log('here')
            if(!b.classList.contains('player1') && !b.classList.contains('player2'))
            {
                if(player==1)
                b.style.backgroundColor = 'rgb(215, 235, 252)';
                else
                b.style.backgroundColor = 'rgb(203, 241, 203)';

            }
        });
    },),
        box.forEach(function(b)
        {
            b.addEventListener('mouseleave',()=>
            {//console.log('there')
                if(!b.classList.contains('player1') && !b.classList.contains('player2'))
                {
                    b.style.backgroundColor = 'darkgray';
                }
            });
        },),
        box.forEach( function(b)
        {
            b.addEventListener('click',()=>
            {//console.log('click')
                if(!b.classList.contains('player1') && !b.classList.contains('player2'))
                {
                    if(player==1)
                    {   track++;
                       b.classList.add('player1');
                        b.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
                        if(check())
                        {
                            endgame(1,0);
                        }
                        player++;
                       // console.log(track);
                    }
                    else
                    {track++;
                        b.classList.add('player2');
                        b.innerHTML='<i class="far fa-circle"></i>';
                        if(check())
                        {
                            endgame(0,1);
                        }
                        player--;
                        //console.log(track);
                    }
                    if(track==9 && !check())
                    {
                        endgame(0,0);
                    }
                }
            function check()
            {    var box= document.querySelectorAll('#box');

                if(box[0].classList.contains('player1') && box[1].classList.contains('player1') && box[2].classList.contains('player1'))
                return 1
                if(box[0].classList.contains('player2') && box[1].classList.contains('player2') && box[2].classList.contains('player2'))
                return 1
               console.log(p1,p2)
                if(box[0].classList.contains('player1') && box[4].classList.contains('player1') && box[8].classList.contains('player1'))
                return 1
                if(box[0].classList.contains('player2') && box[4].classList.contains('player2') && box[4].classList.contains('player2'))
                return 1
                console.log(p1,p2)
                if(box[0].classList.contains('player1') && box[3].classList.contains('player1') && box[6].classList.contains('player1'))
                return 1
                if(box[0].classList.contains('player2') && box[3].classList.contains('player2') && box[6].classList.contains('player2'))
                return 1
                console.log(p1,p2)
                if(box[2].classList.contains('player1') && box[5].classList.contains('player1') && box[8].classList.contains('player1'))
                return 1
                if(box[2].classList.contains('player2') && box[5].classList.contains('player2') && box[8].classList.contains('player2'))
                return 1
                console.log(p1,p2)
                if(box[2].classList.contains('player1') && box[4].classList.contains('player1') && box[6].classList.contains('player1'))
                return 1
                if(box[2].classList.contains('player2') && box[4].classList.contains('player2') && box[6].classList.contains('player2'))
                return 1
                console.log(p1,p2)
                if(box[6].classList.contains('player1') && box[7].classList.contains('player1') && box[8].classList.contains('player1'))
                return 1
                if(box[6].classList.contains('player2') && box[7].classList.contains('player2') && box[8].classList.contains('player2'))
                return 1
                console.log(p1,p2)
                if(box[1].classList.contains('player1') && box[4].classList.contains('player1') && box[7].classList.contains('player1'))
                return 1
                if(box[1].classList.contains('player2') && box[4].classList.contains('player2') && box[7].classList.contains('player2'))
                return 1
                console.log(p1,p2)
                if(box[3].classList.contains('player1') && box[4].classList.contains('player1') && box[5].classList.contains('player1'))
                return 1
                if(box[3].classList.contains('player2') && box[4].classList.contains('player2') && box[5].classList.contains('player2'))
                return 1
                console.log(p1, p2);
            }
            });
        },);

    }
     play();
