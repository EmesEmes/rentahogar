document.addEventListener('astro:page-load',() => {
    console.log("Index Page loaded");
    // index.js
    function updateUserLink() {
        

        const user = JSON.parse(localStorage.getItem('currentUser'));
        const userElement = document.getElementById('user');
        const userElementMobile = document.getElementById('user-mobile');
        if (user) {
            userElement.innerHTML = `<button id="user-name">Hello, ${user.name}</button>
                    <div id="div-submenu" class="hidden flex-col  absolute text-white bg-indigo-700 w-full mt-4 border-2 border-white p-2 gap-4">
                        <a href="/profile" class="text-center">Profile</a>
                        <button id="logout">Log Out</button>
                    </div>`;
            userElementMobile.innerHTML = `<a href="/profile">Hello, ${user.name}</a>`;
        } else {
            userElement.innerHTML = `<a href="/login">Login</a>`;
            userElementMobile.innerHTML = `<a href="/login">Login</a>`;
        }
    }
        updateUserLink();

    
        function checkReload() {
            if (document.location.pathname === '/newflat' || document.location.pathname === '/allflats' || document.location.pathname === '/recovery' || document.location.pathname === '/' || document.location.pathname === '/profile') {
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

    const anchor = document.querySelector('#user-name');
    
    const div = document.querySelector('#div-submenu');

    anchor.addEventListener('click', () => {
        div.classList.toggle('hidden');
        div.classList.toggle('flex');
    });
    
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    });

    const buttonLogout = document.querySelector('#button-logout');
    buttonLogout.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    });

    
    

})