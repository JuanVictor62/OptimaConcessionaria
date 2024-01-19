let email;
let password;

const url = 'http://localhost:5000/usuario/login';

function credential() { // Pegar email e senha

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;

        password = String(password);
        email = String(email);

        login(email, password);
    })

}

function login(email, password) {

    let a;

    try {
        a = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "nome": email,
                "senha": password
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });

    } catch (error) {
        console.log(error)
    }

}

document.getElementById("buttonEnter").addEventListener("click", function () {
    credential(); // Ativar credential ao clicar
})