'use script';

const dropdowns = document.querySelectorAll('.dropdown');
const featuresLink = document.querySelector('#featuresLink');
const companyLink = document.querySelector('#companyLink');
const navBar = document.querySelector('.navBar');
const navBarMobile = document.querySelector('.navBar__mobile');

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

// if(navBar.style.display = "none") {
//     navBarMobile.classList.remove('hidden');
// }