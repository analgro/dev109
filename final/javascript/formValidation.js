document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['myContact'];

    form.addEventListener('submit', function(event) {
        const name = form['name'].value.trim();
        const email = form['email'].value.trim();
        const comment = form['comment'].value.trim();

        if (!name || !email || !comment) {
            alert('All fields are required.');
            event.preventDefault();
        }
    });
});

