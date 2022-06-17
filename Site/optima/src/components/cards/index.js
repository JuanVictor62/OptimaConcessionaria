import './index.scss';
import {listarTodos, apagarVeiculo, carregarVeiculos } from '../../api/veiculoAPI';
import '../../pages/commom/commom.css'
import { Link, useNavigate } from 'react-router-dom';
import  {  confirmAlert  }  from  'react-confirm-alert';
import { useEffect, useState } from 'react';


    export default function Index(){
        useEffect(()  => {
            carregarVeiculos();
        }, [])
    
        async function carregarVeiculos(){
            const resp = await listarTodos();
            setVeiculos(resp); 
        }
        const [veiculos, setVeiculos] = useState([]);
        const [filtro, setFiltro] = useState('');
    
        const navigate = useNavigate()
    
        async function editarVeiculo(id){
            navigate(`/alterarcarro/${id}`);
        }
        function mostrarImagem(imagem) {
            return `http://localhost:5000/${imagem}`
        }
        async function ClickremoverVeiculo(id, nome) {
            confirmAlert({
                title: ' Remover veículo',
                message: `Confirmar remoção do veiculo ${nome}`,
                buttons: [
                    {
                        label: 'sim',
                        onClick: async () => {
                            const resposta = await apagarVeiculo(id);
                            carregarVeiculos();
                            alert('veículo removido')
                        }
                    },
                    {
                        label: 'não'
                    }   
                ]
        })  
        }

        return(
            <div className='abc'>
            {veiculos.map(item => 
                    <div className="carro-1">
                        
                        <img className='icon-lixeira' src="../../assets/img/logo-lixeira.png"  alt='remover' onClick={() => ClickremoverVeiculo(item.id, item.nome) } />
       
                        <img className='icon-edit' src="../../assets/img/1200px-Feedbin-Icon-home-edit.svg.png"  alt='editar'  onClick={() => editarVeiculo(item.id)}/> 
       
                        
                <div className="card-c1">
                    <p className='title-c1'> {item.nome} </p>
                            <div className="car-c1">
                                <img className="ix-img" src={mostrarImagem(item.imagem)}  alt=''/>
                            </div>
                            <div className="card-2-c1">
                                <b className='b-marca'> Marca: </b> {item.marca}
                                <br />
                                <b className='b-marca'> Ano: </b> {item.anofab}
                                <br />
                                <b className='b-marca'> Classe: </b> {item.classe}
                                <br />
                                <b className='b-marca'> Km: </b> {item.km}
                                <br />
                                <b className='b-marca'> Valor: </b> R$ {item.valor}
                                <br /> 
                                <b className='b-marca'> Placa: </b> {item.placa}
                                <br />
                                <p className="card-3-c1"> <b className='b-codigo-c1'>Código:</b> {item.id} </p>
                            </div>
                    </div>
                </div>
            )}
                </div>
        )
    }


     