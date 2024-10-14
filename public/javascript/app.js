const form = document.getElementById('register-form');
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    let usersArray = [];
    const newUser = {
        name: form.elements['name'].value,
        lastname: form.elements['lastname'].value,
        birthday: form.elements['birthday'].value,
        email: form.elements['email'].value,
        password: form.elements['password'].value,
        confpassword: form.elements['confpassword'].value,
        myFlats: [],
        favFlats: []
    }
    form.reset()
    saveUser(newUser);

});

function saveUser(user){
    
    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users)
    if(users == null){
        const arrayUsers = [user]
        localStorage.setItem('users', JSON.stringify(arrayUsers));
    } else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users));
    }
}

const loginForm = document.getElementById('login-form');
console.log(loginForm)