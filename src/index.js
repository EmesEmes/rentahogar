document.addEventListener('astro:page-load',() => {
    console.log("Index Page loaded");
    // index.js
    function updateUserLink() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        const userElement = document.getElementById('user');
        const userElementMobile = document.getElementById('user-mobile');
        if (user) {
            userElement.innerHTML = `<a href="/profile">Hello, ${user.name}</a>`;
            userElementMobile.innerHTML = `<a href="/profile">Hello, ${user.name}</a>`;
        } else {
            userElement.innerHTML = `<a href="/login">Login</a>`;
            userElementMobile.innerHTML = `<a href="/login">Login</a>`;
        }
    }
        updateUserLink();

    
        function checkReload() {
            if (document.location.pathname === '/newflat' || document.location.pathname === '/allflats') {
              // Verifica si la página ya se ha refrescado
              if (!localStorage.getItem('pageRefreshed')) {
                  // Si no se ha refrescado, refresca la página
                  localStorage.setItem('pageRefreshed', 'true');
                  location.reload();
              } else {
                localStorage.removeItem('pageRefreshed');
              }
            }
          }
          checkReload();
    
    function showMenu() {
        const menu = document.getElementById('menu');
        menu.onclick = () => {
            const icon = document.getElementById('menu-icon');
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('hidden');
            icon.attributes.src.value = navbar.classList.contains('hidden') ? '/images/menu.svg' : '/images/close.svg';
            
        }
    }
    showMenu()

})