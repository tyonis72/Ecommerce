//toggle class active
const navbarnav = document.querySelector('.navbar-nav');
//ketika menu di klik
document.querySelector('#menu') .onclick = () => {
navbarnav.classlist.toggle('active');
};