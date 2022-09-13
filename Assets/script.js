/*eslint-env es6*/
/* eslint-env browser */

const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

    document.onclick = function(e){
        if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
            toggle.classList.remove('active');
            navbar.classList.remove('active');
        }
        
    }

    toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}
    
    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active", window.scrollY > 4000);
    })

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}