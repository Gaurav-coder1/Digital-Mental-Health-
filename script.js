// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Newsletter form validation
document.querySelector('.newsletter button').addEventListener('click', () => {
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  const email = emailInput.value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
  } else {
    alert('Thanks for subscribing!');
    emailInput.value = '';
  }
});

// Testimonials carousel (basic rotation)
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function rotateTestimonials() {
  testimonials.forEach((t, i) => {
    t.style.display = i === currentTestimonial ? 'block' : 'none';
  });
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 4000); // Rotate every 4 seconds
rotateTestimonials(); // Initial display

// Get Started button alert
document.querySelector('.hero button').addEventListener('click', () => {
  alert('Welcome to Monosahayak! Let’s begin your wellness journey.');
});