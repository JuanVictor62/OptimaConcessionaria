import './index.scss';
import '../commom/commom.css';
import { Link } from 'react-router-dom';
import {listarTodos, buscarPorNome, apagarVeiculo } from '../../api/veiculoAPI'
import { useEffect, useState } from 'react';

import  {  confirmAlert  }  from  'react-confirm-alert';
import { func } from 'prop-types';


export default function index() {
    const [veiculos, setVeiculos] = useState([]);
    const [filtro, setFiltro] = useState('');


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

    async function carregarVeiculos(){
        const resp = await listarTodos();
        setVeiculos(resp); 
    }

    useEffect(()  => {
        carregarVeiculos();
    }, [])


    async function filtrar(){
        const resp = await buscarPorNome(filtro);
        setVeiculos(resp)
    }

    function mostrarImagem(imagem) {
        return `http://localhost:5000/${imagem}`
    }


    return (
        <main className="container">
            <div className="f2-cabecalho">
                <Link to="/">
                    <img className="f2-logo62" src="../../assets/img/Logo.svg" alt='' />
                </Link>

                <div className='search'>

                    <form>
                        <input className="f2-1-1" type="text" placeholder="Buscar" value={filtro} onChange={e => setFiltro(e.target.value)} />

                        <img className="f2-img" src="../../assets/img/image 25.png" onClick={filtrar} alt='' />
                    </form>
                </div>

                    <Link to="/cadastrocarro" className="f3-botao"> Cadastrar </Link>

                    <Link to="/" className="f2-botao">Voltar</Link>
            </div>

<div className='abc'>
        <div>

        </div>
            {veiculos.map(iten => 
                 
                    <div className="carro-1">
                        
                        <img className='icon-lixeira' src="../../assets/img/logo-lixeira.png"  alt='remover' onClick={() => ClickremoverVeiculo(iten.id, iten.nome) } />

                        <img className='icon-edit' src="../../assets/img/1200px-Feedbin-Icon-home-edit.svg.png"  alt='editar'  /> 

                        
                    <div className="card-c1">

              
                    <p className='title-c1'> {iten.nome} </p>

                            <div className="car-c1">
                                <img className="ix-img" src={mostrarImagem(iten.imagem)}  alt=''/>
                            </div>
                            <div className="card-2-c1">
                                <b className='b-marca'> Marca: </b> {iten.marca}
                                <br />
                                <b className='b-marca'> Ano: </b> {iten.anofab}
                                <br />
                                <b className='b-marca'> Classe: </b> {iten.classe}
                                <br />
                                <b className='b-marca'> Km: </b> {iten.km}
                                <br />
                                <b className='b-marca'> Valor: </b> R$ {iten.valor}
                                <br /> 
                                <b className='b-marca'> Placa: </b> {iten.placa}
                                <br />
                                <p className="card-3-c1"> <b className='b-codigo-c1'>Código:</b> {iten.id} </p>
                            </div>
                    </div>
                </div>
            
            )}
</div>
            
        
            <footer className="f1-rodape">
                <div f1-r-d1>
                    <a href="/landingpage">
                        <img className="f1-r-logo" src="../../assets/img/optima white.png" alt='' />
                    </a>
                    <p className="f1-r-in-18"> &copy;Optima 2022</p>
                </div>
                <div className="f1-r-d2">
                    <a href="/landingpage">
                        <img className="f1-r-img1" src="../../assets/img/instagram.png" alt='' />
                    </a>

                    <a href="/landingpage">
                        <img className="f1-r-img2" src="../../assets/img/icons8-twitter-250.png" alt='' />
                    </a>
                    <a href="/landingpage">
                        <img className="f1-r-img3" src="../../assets/img/facebook.svg" alt='' />
                    </a>
                </div>
                <div className="f1-r-tpc">
                    <div className="f1-r-tpc1">
                        <h3 className="f1-in-19">Inicio</h3>
                        <p className="f1-in-20">
                            <Link className="f1-in-20" to="/" alt=''>
                                Home
                            </Link>
                        </p>
                        <Link className="f1-in-20" to="/pagecarros" alt=''>
                            <p className="f1-in-20">
                                Veiculos
                            </p>
                        </Link>
                    </div>
                    <div className="f1-r-tpc2">
                        <h3 className="f1-in-19">Sobre nós</h3>
                        <Link className="f1-in-20" to="/" alt=''>
                            <p className="f1-in-20">
                                Informações da empresa
                            </p>
                        </Link>

                        <a className="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207">
                            <p className="f1-in-20">
                                Contato
                            </p>
                        </a>
                    </div>
                    <div className="f1-r-tpc3">
                        <h3 className="f1-in-19">Suporte</h3>
                        <a className="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                            <p className="f1-in-20">FAQ</p>
                        </a>
                        <a className="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                            <p className="f1-in-20">Chat</p>
                        </a>
                    </div>
                </div>

                <div className='f1-r-c4-1'>
                    <div className="f1-r-c4">
                        <img className="f1-r-img-4" src="../../assets/img/icons8-whatsapp-192.png" alt='' />
                        <p className="f1-r-in-21">11 59746879</p>
                    </div>
                    <div>
                        <p className="f1-r-in-22">Optimaconce@gmail.com</p>

                        <p className="f1-r-in-23">Av. das nações unidas,1206 - <br></br> São Paulo - 04776-002</p>
                    </div>
                </div>
            </footer>

        </main>

    );
}