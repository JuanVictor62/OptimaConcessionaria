let email;
let password;

const url = 'http://localhost:5000/usuario/login';

function credential() { // Pegar email e senha

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    password = String(password);
    email = String(email);

    login(email, password);

}

function login(email, password) {

    let r = 0;

    try {
        fetch(url, {
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
                    response.json().then(data => {
                        alternateText(data.erro) // Deixar vermelho o texto
                        throw new Error(data.erro)
                    })
                } else {
                    window.location.href = 'http://127.0.0.1:5500/site3/pageCarros/index.html';
                    localStorage.setItem(emailFixed, passwordFixed);
                    r = 1
                    return response.json();
                }
            })
            .then(data => {
                const id = data.id
                const nome = data.nome

                console.log("Id: " + id)
                console.log("Nome: " + nome)
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });

    } catch (error) {
        console.log(error);
    }

}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    credential(); // Ativar credential ao clicar
})

function alternateText(error) {
    let id = document.getElementById("loginError")
    id.style.color = "red";
    id.style.display = "block";
    id.innerHTML= error;
}