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
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
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

/*============= SCROLL HEADER(MENU) =============*/
function scrollHeader() {
    const nav = document.querySelector('#header')
    //when the scroll is greater than 200vh, add the scroll header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*============= SHOW SCROLL UP =============*/
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');
    //When the scroll is higher than 560 viewport height, add the show-scroll class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

 
/*============= DARK LIGHT THEME =============*/
const themeBtn = document.querySelector('#theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the currrent theme that the interface has by valudating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//We valduate if the user previously chose a theme
if (selectedTheme) {
    //If valudation is fulfilled, we ask what the issue was to know if we actiavyed or deactivated the dark mode
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate/ deactivate the theme manually with the button 
themeBtn.addEventListener('click', () => {
    //add or remove the dark/ icon themme
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

