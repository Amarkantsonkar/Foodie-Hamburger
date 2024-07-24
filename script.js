const hamburgerMenuContainer = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const goToTop = document.querySelector('.go-to-top')
const topElement = document.querySelector(".main-conatiner")
const nav = document.querySelector('nav')

hamburgerMenuContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})
nav.addEventListener('click',(e)=>{
    e.stopPropagation()
})
closeIcon.addEventListener('click', (e) => {
    headerContent.classList.remove('menu-open')
})
window.addEventListener('click', (e) => {
    headerContent.classList.remove('menu-open')
})

goToTop.addEventListener('click', (e) => {
    topElement.scrollTo(0, 0)
})