document.addEventListener('astro:page-load',() => {
    console.log("Index Page loaded");
    // index.js
    function updateUserLink() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const userElement = document.getElementById('user');
        if (user) {
            userElement.innerHTML = `<a href="/profile">Hello, ${user.name}</a>`;
        } else {
            userElement.innerHTML = `<a href="/login">Login</a>`;
        }
    }
        updateUserLink();
})