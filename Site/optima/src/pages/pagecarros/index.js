import './index.scss';
import '../commom/commom.css';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import {buscarPorNome} from '../../api/veiculoAPI'
import { useEffect, useState } from 'react';
import { func } from 'prop-types';
import Cards from '../../components/cards'

export default function index() {
    const [veiculos, setVeiculos] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/')
    }

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/');
        }


    }, [])
    
    async function filtrar(){
        const resp = await buscarPorNome(filtro);
        setVeiculos(resp)
    }

    return (
        <main className="container">
            <div className="f2-cabecalho">
                <Link to="/">
                    <img onClick={sairClick} className="f2-logo62" src="../../assets/img/Logo.svg" alt='' />
                </Link>

                    <Link to="/cadastrocarro" className="f3-botao"> Cadastrar </Link>

            
                    <div onClick={sairClick} className='f4-botao'> Sair </div>
            </div>

            <Cards />
            
            <footer className='f1-rodape'>
                    <div className='f1-r-d1'>
                        <Link to="/"> <img className='f1-r-logo' src="./assets/img/optima white.png" alt='' /> </Link>
                        <p className='f1-r-in-18'> &copy;Optima 2022</p>
                    </div>
                    <div className='f1-r-d2'>

                        <a href="https://www.instagram.com/"><img className='f1-r-img1' src="./assets/img/instagram.png" alt='' />
                        </a>


                        <a href="https://twitter.com/"><img className='f1-r-img2' src="./assets/img/icons8-twitter-250.png" alt='' />
                        </a>

                        <a href="https://www.facebook.com/"><img className='f1-r-img3' src="./assets/img/facebook.svg" alt='' />
                        </a>
                    </div>
                    <div className='f1-r-tpc'>
                        <div className='f1-r-tpc1'>
                            <h3 className='f1-in-19'>Inicio</h3>
                            <p className='f1-in-20'> <a href="#home" class="f1-in-20" > Home </a> </p>
                            <Link to="/pagecarros" className='f1-in-20' > <p className='f1-in-20' >Veiculos</p> </Link>
                        </div>
                        <div className='f1-r-tpc2'>
                            <h3 className='f1-in-19'>Sobre n??s</h3>
                            <div className='transi'>    <a className='f1-in-21' href="#info"> <p className='f1-in-20'>Informa????es da empresa </p> </a> </div>
                            <a className='f1-in-20' href="https://api.whatsapp.com/send?phone=5511988749207"><p className='f1-in-20'>Contato</p></a>
                        </div>
                        <div className='f1-r-tpc3'>
                            <h3 className='f1-in-19'>Suporte</h3>
                            <a className='f1-in-20' href="https://api.whatsapp.com/send?phone=5511988749207"><p className='f1-in-20'>FAQ</p> </a>
                            <a className='f1-in-20' href="https://api.whatsapp.com/send?phone=5511988749207"><p className='f1-in-20'>Chat</p> </a>
                        </div>
                    </div>

                <div className='f1-r-d3'> 
                    <img className='f1-r-d3-img1' src="./assets/img/icons8-whatsapp-192.png" alt='' />
                    <p className='f1-r-d3-p1'> 11 59746879 </p>

                    <p className='f1-r-d3-p2'> Optimaconce@gmail.com </p>

                    <p className='f1-r-d3-p3'> Av. das na????es unidas,1206 - S??o Paulo - 04776-002 </p>


                </div>
            </footer>
        </main>
    );
}