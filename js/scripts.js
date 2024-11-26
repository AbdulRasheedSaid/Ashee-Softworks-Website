// Toggle Navbar for Mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

console.log('External script loaded!');





// Dynamic Taglines
const taglines = [
    "Crafting Websites & APIs That Wow",
    "Modern, Scalable Digital Solutions",
    "Innovate, Create, Inspire"
];
let index = 0;
const taglineElement = document.getElementById("dynamic-tagline");
setInterval(() => {
    taglineElement.textContent = taglines[index];
    index = (index + 1) % taglines.length;
}, 3000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
console.log('External script is finished loading!');