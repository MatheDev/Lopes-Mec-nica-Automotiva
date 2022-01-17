// Menu Show y hidden
const navMenu  = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

// Menu Show
if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

// Menu Hidden
if(navClose){
  navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
  })
}

// Remove menu mobile
const navLink = document.getElementById('nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav_menu')
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))