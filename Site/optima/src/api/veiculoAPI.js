import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarVeiculo(modelo, marca, valor, anofab, km, codigo, classe){
    const resposta = await api.post('/veiculo', {
        modelo: modelo,
        marca: marca,
        valor: valor,
        anofab: anofab,
        km: km,
        codigo: codigo,
        classe: classe,
    }
    )
    return resposta.data;
}

export async function enviarImagemVeiculo(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/veiculo/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}