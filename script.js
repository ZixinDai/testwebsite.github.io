// Simple interactions for the test site
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Greet button
  const greetBtn = document.getElementById('greetBtn');
  greetBtn.addEventListener('click', () => {
    alert('Hello! Welcome to your test site.');
  });

  // Contact form submit (fake)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !message) {
      status.textContent = 'Please fill out all fields.';
      status.style.color = 'crimson';
      return;
    }

    // Simulate sending
    status.style.color = 'green';
    status.textContent = 'Sending...';

    setTimeout(() => {
      status.textContent = `Thanks, ${name}! Your message was sent.`;
      form.reset();
      setTimeout(() => status.textContent = '', 4000);
    }, 900);
  });
});