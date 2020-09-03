var colorhead = ['rgb(191, 240, 142)','lightpink','rgb(159, 217, 240)','plum','rgb(255, 188, 188)','rgb(222, 140, 255)','rgb(248, 215, 152)'];

var colorbody = ['rgb(218, 243, 193)','rgb(247, 223, 227)','rgb(193, 216, 230)','rgb(238, 211, 248)','rgb(233, 206, 197)','rgb(228, 171, 250)','rgb(248, 232, 202)'];

var author =['— Dalai Lama','— Mae West','– Albert Einstein','— Will Smith','– Ernest Hemingway','– Frank Sinatra','— Mark Twain','— Grandma Moses',' —Leonardo DiCaprio','— Abraham Lincoln','—Peter Parker','— Tony Stark','—Robert Downey Jr'];

var quotes = ['The purpose of our lives is to be happy.','You only live once, but if you do it right, once is enough.',
'If you want to live a happy life, tie it to a goal, not to people or things.','Money and success don’t change people; they merely amplify what is already there.','In order to write about life first you must live it.','The big lesson in life, baby, is never be scared of anyone or anything.',
'Good friends, good books, and a sleepy conscience: this is the ideal life.','Life is what we make it, always has been, always will be.','If you can do what you do best and be happy, you’re further along in life than most people.',
'The best way to predict your future is to create it.','With Great Power, Comes Great Responsibility','WHAT AM I EVEN TRIPPING FOR? EVERYTHING IS GOING TO WORK OUT PERFECTLY, THE WAY IT’S SUPPOSED TO.','People rise out of the ashes because, at some point, they are invested with a belief in the possibility of triumph over seemingly impossible odds.',
];
var btn = document.querySelector('#btn');
var color=0;
var write=1;
var head = document.querySelectorAll('.chead');
var body =document.querySelectorAll('.cbody');
var foot = document.querySelector('.cfoot');
var head_text =document.querySelector('#head-text');
var body_text =document.querySelector('#body-text')
btn.addEventListener('click',()=>{
    for(var i=0;i<2;i++)
    {
    head[i].style.backgroundColor =` ${colorhead[color]}`;
    body[i].style.backgroundColor = `${colorbody[color]}`;
    }
    foot.style.backgroundColor =` ${colorhead[color]}`;
    //console.log(color, colorhead[color]);
    color=(color+1)%7;
   
    head_text.innerHTML= `${author[write]}`;
    body_text.innerHTML = `${quotes[write]}`;
    write=(write+1)%13;
});
