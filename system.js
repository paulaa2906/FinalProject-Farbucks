 const navAnimation = ()=>{
     const hamburger = document.querySelector('.burger')
     const nav = document.querySelector('.nav-links')
     let navFade = document.querySelectorAll('.nav-links li')

     hamburger.addEventListener('click', ()=>{
         nav.classList.toggle('nav-on')

         navFade.forEach((link, index) =>{
             if(link.style.animation){
                link.style.animation= ''
             }
             else{
                  link.style.animation=`fading 0.5s ease forwards ${index/7 + 0.9}s`;
             }
        });
     });
     
 }

 navAnimation();