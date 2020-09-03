const game= ()=>
{
let pscore=0;
let cscore=0;
const startgame=()=>{
    const scoreboard=document.querySelector('.score');
    const playbtn=document.querySelector('.intro button');
    const introscreen= document.querySelector('.intro');
    const match=document.querySelector('.match');
    playbtn.addEventListener('click',()=>{
        introscreen.classList.add('fadeout');
        match.classList.add('fadein');
        scoreboard.classList.add('fadein');

    });
};




const compare=(pc,cc)=>
{
    const winner=document.querySelector('.winner');
if(pc===cc)
{
winner.textContent=" It is a tie ";
return;
}
if(pc==='rock')
{
    if(cc==='scissor'){
    winner.textContent=' Player Won';
        pscore++;
        
}
    else{
    winner.textContent='Computer Won';
    cscore++;
    }
    upscore();  
}
if(pc==='paper')
{
    if(cc==='rock'){
    winner.textContent='Player Won ';
    pscore++;
    }
    else{
    winner.textContent=' Computer Won';
    cscore++;
    }
    upscore();
}
if(pc==='scissor')
{
    if(cc==='paper'){
    winner.textContent='Player Won';
    pscore++;
   }
    else{
    winner.textContent='Computer Won';
    cscore++;
   }
   upscore();
}
return;
}
const upscore=()=>
{ 
    const ps=document.querySelector('.pscore p');
    const cs=document.querySelector('.cscore p');
    ps.textContent=`${pscore}`;
    cs.textContent=`${cscore}`;
};

const playmatch=()=>
{
    const opts=document.querySelectorAll('.opts button');
    const phand=document.querySelector('.player-hand');
    const chand=document.querySelector('.computer-hand');
    const copt=['rock','paper','scissor'];
    opts.forEach(opt=>{
        opt.addEventListener('click',function(){
           
            const cnum= Math.floor(Math.random()*3);
            const cchoice=copt[cnum];
compare(this.textContent,cchoice);
phand.src=`${this.textContent}.png`;
chand.src=`${cchoice}.png`;
console.log(this.textContent,cchoice);
        });
    });
};








startgame();
playmatch();
}
game();