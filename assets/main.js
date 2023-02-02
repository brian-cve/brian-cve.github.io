/*========== Menu show and hidden ============*/

const   navMenu = document.getElementById('nav-menu'),
        navToggle= document.getElementById('nav-toggle'),
        navClose= document.getElementById('nav-close');

/*========== Menu show  ============*/        
/*========== Validate if constant exist  ============*/

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*========== Menu Hidden ============*/
/*==== Validate if constant exists ===*/

if(navClose){
    navClose.addEventListener ('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*========== Remove Menu Mobile ============*/

const navLink = document.querySelectorAll('.nav_link')
/*========== Query selector all selecciona todos los elementos con la clase especificada que en este caso es Navlink ============*/
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    // Classlist le da acceso a las clases que tenemos en nuestro css a javascript y despues ejecuta el remove
}
navLink.forEach(n => n.addEventListener('click', linkAction))
    // ForEach permite que se ejecute la función cada vez por cada elemento en este caso por cada elemento que tenga nav link