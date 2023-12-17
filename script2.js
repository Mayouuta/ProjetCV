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