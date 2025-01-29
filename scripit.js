const bar = document.querySelector('.bar');
const navLinks = document.querySelector('nav ul');

bar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
var typed = new Typed('.text', {
    strings:[ "Frontend Developer","UX Designer","Web Developer"],
    typeSpeed: 100,
    BackaDelay:1000, 
    loop:true

  });
