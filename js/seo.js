// Toggle Navbar for Mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    question.addEventListener('click', () => {
        // Close any other open items
        faqItems.forEach(el => {
            if (el !== item) el.classList.remove('open');
        });
        // Toggle the current item
        item.classList.toggle('open');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
console.log('External script is finished loading!');