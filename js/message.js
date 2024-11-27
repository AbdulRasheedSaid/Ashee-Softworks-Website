// (function() {
//     emailjs.init('4ebse5A_vBjt1fdFE'); 
//   })();

//   document.getElementById('contact-form').addEventListener('submit', function(event) {
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

const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_pr7rnl4';
   const templateID = 'template_blyfruc';

   emailjs.send(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

console.log('it is finished');

