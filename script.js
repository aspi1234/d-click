document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.querySelector('.contact-column');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    clearErrors();

    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const sujet = document.getElementById('sujet');
    const message = document.getElementById('subject-content');

    let isValid = true;

    if (prenom.value.trim() === '') {
      showError(prenom, 'Le prénom ne peut pas être vide.');
      isValid = false;
    }


    if (nom.value.trim() === '') {
      showError(nom, 'Le nom ne peut pas être vide.');
      isValid = false;
    }


    if (email.value.trim() === '') {
      showError(email, 'L\'adresse email ne peut pas être vide.');
      isValid = false;
    }


    if (sujet.value.trim() === '') {
      showError(sujet, 'Le sujet ne peut pas être vide.');
      isValid = false;
    }


    if (message.value.trim().length < 20) {
      showError(message, 'Le message doit contenir au moins 20 caractères.');
      isValid = false;
    }

    if (isValid) {
      alert('Formulaire envoyé avec succès !');
    }
  });


  function showError(inputElement, message) {
    const formField = inputElement.parentElement;
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message'; 
    errorElement.textContent = message;

    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.8em';
    errorElement.style.marginTop = '5px';
    
    formField.appendChild(errorElement);
  }

 
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
  }
});