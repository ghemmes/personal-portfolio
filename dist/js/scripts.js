/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
  
  //   errorMessage.textContent = 'error';
  
  
  
  //   // Disable the button
  
  //   button.disabled = true;
  
  
  
  //   fetch(url)
  
  //     .then(response => {
  
  //       if (response.status === 200) {
  
  //         console.log('Email sent!');
  
  //         document.querySelector('#email').value = '';
  
  //         document.querySelector('#name').value = '';
  
  //         document.querySelector('#message').value = '';
  
  
  
  //         // Display the success message
  
  //         successMessage.textContent = 'Email sent successfully!';
  
  //       } else {
  
  //         console.error('Error sending email:', response.status);
  
  
  
  //         // Display the error message
  
  //         errorMessage.textContent = 'Error sending email. Please try again later.';
  
  //       }
  
  //     })
  
  //     .catch(error => {
  
  //       console.error('Error sending email:', error);
  
  
  
  //       // Display the error message
  
  //       errorMessage.textContent = 'Error sending email. Please try again later.';
  
  //     })
  
  //     .finally(() => {
  
  //       // Enable the button
  
  //       button.disabled = false;
  
  //     });
  
  // });





const button = document.querySelector('#sendMessageButton');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const name = document.querySelector('#name').value;
  const message = document.querySelector('#message').value;
  const url = `https://us-central1-personal-website-bb395.cloudfunctions.net/sendEmail?email=${email}&name=${name}&message=${message}`;
  fetch(url)
  .then(response => {
    if (response.status === 200) {
      console.log('Email sent!');
      document.querySelector('#email').value = '';
      document.querySelector('#name').value = '';
      document.querySelector('#message').value = '';
      window.alert('Email sent successfully!');
    } else {
      console.error('Error sending email:', response.status);
      window.alert('Error sending email. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error sending email:', error);
    window.alert('Error sending email. Please try again later.');
  });
});






    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
