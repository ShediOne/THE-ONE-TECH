
const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.parentNode.parentNode;
        const inputs = row.querySelectorAll('.edit-input');
        inputs.forEach(input => {
            input.disabled = !input.disabled;
        });

        if (button.textContent === 'Save') {
            button.textContent = 'Edit';
        } else {
            button.textContent = 'Save';
        }
    });
});
