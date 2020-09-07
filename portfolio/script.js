var nav= document.querySelectorAll('#nav-text');
nav[0].style.backgroundColor="rgba(222, 196, 228, 0.281)";
nav.forEach((n)=>{
    n.addEventListener('click',()=>{
        n.style.backgroundColor="rgba(222, 196, 228, 0.281)";
        for(e=0;e<nav.length;e++)
        {
            if(nav[e]!=n)
            {  
                nav[e].style.backgroundColor="rgb(52,58,64)";
            }
        }
    })
})