const newFormHandler = async (event) =>
{
    event.preventDefault();

    const blog = document.querySelector('#blogContent').value.trim();
debugger    
    if (blog) {
        const response = await fetch(`api/blog`, {
            method: 'POST',
            body: JSON.stringify({ content:blog }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create product');
        }
    }
};

document.querySelector('#new-blog').addEventListener('click',newFormHandler)