
const loginFormHandler = async (event) =>
{
    event.preventDefault();

    const email = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};
const logout = async (event) =>
{
    event.preventDefault();


}

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
    .querySelector('#sign-in-form')
    .addEventListener('submit', loginFormHandler);
