let email;
let password;

const url = "http://localhost:5500/usuario/login";

function credential() { // Pegar email e senha

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    password = String(password);
    email = String(email);

    login(email, password);

}

function login(email, password) {

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
                        alternateText(data.erro); // Deixar vermelho o texto
                        throw new Error(data.erro);
                    })
                } else {
                    response.json().then(data => {
                        localStorage.setItem("Usuário-Logado", `Name: ${data.nome} | ID: ${data.id}`);
                    })
                    redirect() // direcionar pra pageCarros 
                }
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
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
    let id = document.getElementById("loginError");
    id.style.color = "red";
    id.style.display = "block";
    id.innerHTML= error;
}

function redirect() {
    document.getElementById("buttonEnter").innerHTML = '<img src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt="" class="loginLoading">';
    setTimeout(() => {
        window.location.href = "localhost:5500/site3/pageCarros/index.html";                        
    }, 1000)
}