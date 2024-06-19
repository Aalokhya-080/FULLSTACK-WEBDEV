document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
            // Handle form submission (e.g., AJAX request)
            alert('Subscribed successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Image Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('#image-slider img');
    showSlides();

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
