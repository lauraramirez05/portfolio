/*============= MENU SHOW & HIDDEN =============*/
const navMenu = document.querySelector("#nav_menu");
const navToggle = document.querySelector("#nav_toggle");
const navClose = document.querySelector("#nav_close");

    
/* MENU SHOW */

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 


/* MENU HIDDEN */

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/*============= REMOVE MENU MOBILE =============*/
    // for every time we click a link in the menu, it will disappear
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*============= ACCORDION SKILLS =============*/

const skillsContent = document.querySelectorAll('.skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');


function toggleSkills() {
    let itemClass= this.parentNode.className  //The value of the variable is the className of the parent that belongs to the element clicked

    for (i=0; i<skillsContent.length; i++) {
        skillsContent[i].className= 'skills_content skills_close'
        //It goes through all the skills content and assigns the class 'skills_content skills_close hiding it
    }

    if(itemClass === "skills_content skills_close") {
        this.parentNode.className = 'skills_content skills_open'
        /*If the className of the element clicked is skills_close, we reassign it to skills_open to display content
        this.parentNode.className = 'skills_content skills_open'. 
        We could replace this.parentNode.className = itemClass, the issue is that it wouldn't 
        update to each click*/
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*The eventListener is applied to skillsHeader, because its parent is 
skills_content which is the one that has the classes we are changing with the parentNode*/

/*============= SERVICES MODAL =============*/
const modalView = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_btn');
const modalCloses = document.querySelectorAll('.service_modal-close'); //querySelectorAll returns an array

let modal = function(modalClick) {
    modalView[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

/* 
Previous code explanation
1.  The selected elements return an array
2.  When a user clicks on the button, the modal function is called with the index of the button that 
was clicked on. Using it as the argument
3.  The modal function adds the active modal, causing it to be displayed

*/


modalCloses.forEach((modalClose,i) => {
    modalClose.addEventListener('click', () => {
        modalView.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

 
/*============= SWIPER =============*/
let  swiper = new Swiper(".portfolio_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*============= SCROLL SECTIONS ACTIVE LINK =============*/
const sections = document.querySelectorAll('section[id')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*============= CHANGE BACKGROUND HEADER =============*/
function scrollHeader() {
    const nav = document.querySelector('#header')
    //when the scroll is greater than 200vh, add the scroll header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

  

