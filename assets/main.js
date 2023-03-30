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

/*========== Accordion Skills ============*/

const skillsContent = document.getElementsByClassName('skills_content')
        skillsHeader = document.querySelectorAll(' .skills_header')

function toggleSkills(){
    let itemclass = this.parentNode.className;
      // this.parentNode, me permite sacar el elemento del documento global
        for (i = 0; i < skillsContent.length; i++) {
          skillsContent[i].className = 'skills_content skills_close'
            }
        if (itemclass === 'skills_content skills_close') {
            this.parentNode.className = 'skills_content skills_open'
        }
   }    

skillsHeader.forEach((al) => {
    al.addEventListener('click', toggleSkills)
})

/*========== Qualification Tabs ============*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents= document.querySelectorAll('[data-content]')

    tabs.forEach(tab =>{
        tab.addEventListener('click', ()=>{
            const target = document.querySelector(tab.dataset.target)
            
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification_active')
            })

            target.classList.add ('qualification_active')

            tabs.forEach(tab => {
                tab.classList.remove('qualification_active')
            })
            tab.classList.add('qualification_active')
        })
    })

