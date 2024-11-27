// (function() {
//     emailjs.init('4ebse5A_vBjt1fdFE'); 
//   })();

//   document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = {
//       name: this.name.value,
//       email: this.email.value,
//       message: this.message.value,
//     };

//     emailjs.send('service_pr7rnl4', 'template_blyfruc', formData)
//       .then(() => {
//         alert('Message sent successfully!');
//       }, (error) => {
//         console.error('Failed to send message:', error);
//         alert('Failed to send message. Please try again later.');
//       });

//      Optionally reset form after submission
//     this.reset();
//   });

  (function() {
    emailjs.init('4ebse5A_vBjt1fdFE'); // Replace with your EmailJS Public Key
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    emailjs.send('service_pr7rnl4', 'template_blyfruc', formData)
      .then(() => {
        successMessage.style.display = 'block';
        form.reset(); // Optionally reset the form
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        errorMessage.style.display = 'block';
      });
  });