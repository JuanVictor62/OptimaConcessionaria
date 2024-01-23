let token = document.cookie.replace("token=", "")

const url = "http://localhost:5500/usuario/login/validToken"


let isValidToken = async function (token) {
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token
            })
        })
            .then(response => {
                response.json().then(data => {

                    if (data != true) {
                        window.location.href = 'http://127.0.0.1:5500/site3/login/index.html'
                    }
                })
            })
            .catch(error => {
                console.log('Erro na requisição: ' + error)
            })
    } catch (error) {
        console.log("linha 27: " + error)
    }
}


isValidToken(token);