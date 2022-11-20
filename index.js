'use script';

const dropdowns = document.querySelectorAll('.dropdown');
const featuresLink = document.querySelector('#featuresLink');
const companyLink = document.querySelector('#companyLink');
const navBar = document.querySelector('.navBar');
const navBarMobileHeader = document.querySelector('.navBarMobile-header');
const navBarMobile = document.querySelector('.navBar__mobile');
const burgerMenu = document.getElementById('burgerMenu');
const closeMenu = document.querySelector('.navigation__closeMenu');
const featuresMobileOpen = document.getElementById('featuresMobile');
const companyMobileOpen = document.getElementById('companyMobile');
const dropdownMobile = document.querySelector('.dropdownMobile')

const dropdownMobileOpener = document.getElementById('dropdownMobileOpener');

featuresLink.addEventListener('mouseover', () => {
    dropdowns[0].classList.remove('hidden')
})
featuresLink.addEventListener('mouseleave', () => {
    dropdowns[0].classList.add('hidden')
})

companyLink.addEventListener('mouseover', () => {
    dropdowns[1].classList.remove('hidden')
})
companyLink.addEventListener('mouseleave', () => {
    dropdowns[1].classList.add('hidden')
})

burgerMenu.addEventListener('click', ()=> {
    navBarMobile.classList.remove('hidden');
})

closeMenu.addEventListener('click', ()=> {
    navBarMobile.classList.add('hidden')
})

dropdownMobileOpener.addEventListener('click', () => {
    dropdownMobile.classList.toggle('hidden');
})