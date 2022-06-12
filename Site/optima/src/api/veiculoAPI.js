import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarVeiculo(modelo, marca, valor,placa, anofab, km, codigo, classe){
    const resposta = await api.post('/veiculo', {
        modelo: modelo,
        marca: marca,
        valor: valor,
        placa:placa,
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

    const resposta = await api.put(`/veiculo/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}


export async function alterarVeiculo(modelo, marca, valor,placa, anofab, km, codigo, classe, id){
    const resposta = await api.put(`/veiculo`, {
        modelo: modelo,
        marca: marca,
        valor: valor,
        placa:placa,
        anofab: anofab,
        km: km,
        codigo: codigo,
        classe: classe,
        id:     id
    }
    )
    return resposta.data;
}