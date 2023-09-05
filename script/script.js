// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => 
    { new bootstrap.Collapse(menuToggle).toggle() })
})

// toggle between page light/dark mode

function toggleLightDark() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    forceBstoggleLightDark("card-body");
    forceBstoggleLightDark("form-control");
    // forceBstoggleLightDark("btn-close");
    forceBstoggleLightDark("btn-success");

 }

// force some Bottstrap classes to toggle between page light/dark mode

function forceBstoggleLightDark(btsClass) {
    let element1 = document.getElementsByClassName(btsClass);
    for (let elem of element1) {
        elem.classList.toggle("dark-mode");
        elem.classList.toggle("text-white");
    }
}