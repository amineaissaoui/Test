// basic mobile menu toggle
function toggleMenu() {
    var nav = document.getElementById('main-nav');
    if (nav.className === 'open') {
        nav.className = '';
    } else {
        nav.className = 'open';
    }
}

// simple form validation for contact
function validateForm(event) {
    var form = document.getElementById('contact-form');
    if (!form.checkValidity()) {
        event.preventDefault();
        alert('Please fill all required fields correctly.');
    }
}

var contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}
