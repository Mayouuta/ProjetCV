window.onload = function () {
    function handleLinkClick(event) {
        event.preventDefault();
        const userConfirmation = confirm("Etes-vous sur de vouloir quitter cette page?");
        if (userConfirmation) {
            window.location.href = event.target.href;
        } else {
        }
    }
	
    const confirmationLinks = document.querySelectorAll('.confirmation-link');
    confirmationLinks.forEach(function (link) {
        link.addEventListener('click', handleLinkClick);
    });
};