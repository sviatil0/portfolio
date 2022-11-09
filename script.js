const aboutButton = document.querySelector('.about-button');
const portfolioButton = document.querySelector('.portfolio-button');
const blogButton = document.querySelector('.blog-button');
const scrollButton = document.querySelector('.scroll-button');

const aboutPart = document.querySelector('.about-me')
const portfolioPart = document.querySelector('.portfolio');
const blogPart = document.querySelector('.blog');

const years = document.querySelector('.years');
const projects = document.querySelector('.projects');
const hours = document.querySelector('.hours');

const contactButton = document.querySelector('.contact-button');
const contactPart = document.querySelector('.contacts');


contactButton.addEventListener('click', () => {
    blogPart.classList.add('closed');
    portfolioPart.classList.add('closed');
    aboutPart.classList.remove('closed');

    contactPart.scrollIntoView();
});

const contactButtonFooter = document.querySelector('.contact-button-footer');


contactButtonFooter.addEventListener('click', () => {
    blogPart.classList.add('closed');
    portfolioPart.classList.add('closed');
    aboutPart.classList.remove('closed');

    contactPart.scrollIntoView();
});


anime({
    targets: '#demo-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 20000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

var animation_years = anime({
    targets: years,
    innerHTML: [0, 4],
    easing: 'linear',
    round: 1,
    autoplay: false
});

var animation_projects = anime({
    targets: projects,
    innerHTML: [0, 7],
    easing: 'linear',
    round: 1,
    autoplay: false
});

var animation_hours = anime({
    targets: hours,
    innerHTML: [0, 1299],
    easing: 'linear',
    round: 1,
    autoplay: false
});



var $years = $('.years');
var $projects = $('.projects');
var $hours = $('.hours');


$years.waypoint(function() {
    animation_years.play();
}, { offset: '90%' });

$projects.waypoint(function() {
    animation_projects.play();
}, { offset: '90%' });

$hours.waypoint(function() {
    animation_hours.play();
}, { offset: '90%' });




// var $scrollTo = $('.menu');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
        scrollButton.classList.add("active");
    } else {
        scrollButton.classList.remove("active");
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});






let menuOpen = false;

portfolioPart.classList.add('closed');
blogPart.classList.add('closed');

portfolioButton.addEventListener('click', () => {
    aboutPart.classList.add('closed');
    blogPart.classList.add('closed');
    portfolioPart.classList.remove('closed');
    portfolioPart.scrollIntoView();
});

blogButton.addEventListener('click', () => {
    aboutPart.classList.add('closed');
    portfolioPart.classList.add('closed');
    blogPart.classList.remove('closed');
    blogPart.scrollIntoView();
});
aboutButton.addEventListener('click', () => {
    blogPart.classList.add('closed');
    portfolioPart.classList.add('closed');
    aboutPart.classList.remove('closed');
    aboutPart.scrollIntoView();
});