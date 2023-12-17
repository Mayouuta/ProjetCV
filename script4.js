document.addEventListener('DOMContentLoaded', function () {
    function handleButtonClick() {
        const nameInput = document.getElementById('name');
        const surnameInput = document.getElementById('surname');
        const emailInput = document.getElementById('email');

        if (nameInput.value.length < 3) {
            alert("Le nom doit avoir au moins 3 caractères.");
        } else {
            alert("Le nom est correct.");
        }

        if (surnameInput.value.length < 3) {
            alert("Le prénom doit avoir au moins 3 caractères.");
        } else {
            alert("Le prénom est correct.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert("Veuillez saisir une adresse e-mail valide.");
        } else {
            alert("L'adresse e-mail est correcte.");
        }
    }

    const confirmerButton = document.getElementById('confirmer');

    confirmerButton.addEventListener('click', handleButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    function handleLinkClick(event) {
        event.preventDefault();

        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    const retourAcceuilLink = document.querySelector('.links-container a');

    retourAcceuilLink.addEventListener('click', handleLinkClick);

    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-button');

    overlay.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
});