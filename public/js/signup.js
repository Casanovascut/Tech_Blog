const signupFormHandler = async (event) =>
{
    event.preventDefault();

    const name = document.querySelector('#sign-in-form-name').value.trim();
    const email = document.querySelector('#sign-in-form-user').value.trim();
    const password = document.querySelector('#sign-in-form-pass').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to sign up.');
        }
    }
};

function showPass()
{
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
