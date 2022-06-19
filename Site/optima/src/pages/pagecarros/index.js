import './index.scss';
import '../commom/commom.css';
import { Link, useNavigate } from 'react-router-dom';
import {buscarPorNome} from '../../api/veiculoAPI'
import { useEffect, useState } from 'react';
import { func } from 'prop-types';
import Cards from '../../components/cards'

export default function index() {
    const [veiculos, setVeiculos] = useState([]);
    const [filtro, setFiltro] = useState('');
    
    async function filtrar(){
        const resp = await buscarPorNome(filtro);
        setVeiculos(resp)
    }

    return (
        <main className="container">
            <div className="f2-cabecalho">
                <Link to="/">
                    <img className="f2-logo62" src="../../assets/img/Logo.svg" alt='' />
                </Link>
                <div className='search'>
                </div>
                    <Link to="/cadastrocarro" className="f3-botao"> Cadastrar </Link>

                    <Link to="/" className="f2-botao">Voltar</Link>
            </div>

            <Cards />
            
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