import './index.scss';
import '../commom/commom.css';
import { Link } from 'react-router-dom';

export default function index() {
    return(
        <main class="container">

        <div class="f2-cabecalho">
            <Link to="/pagecarros"> 
                <img class="f2-logo" src="../../assets/img/Logo.svg" alt='' /> 
            </Link>

            <Link class="f2-vei" to="/cadastrocarro"> Cad. veículos</Link>
            <Link class="f2-botao" to="/pagecarros">
                Voltar
            </Link>
        </div>

            <section class="f2-fundo">

                

                <div className="f2-f1">
                    <div class="f2-f1-1"> Cadastro de compras </div>
                    <img src="../../assets/img/icons8-comprar-90 1.png" alt=""/>
                </div>

            <div class="form">

                <div class="f2-f2">
                    <br></br><br></br><br></br>
                    
                    <p class="in-2"> Nome:</p>

                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br><br></br>
                    
                    <p class="in-1">CPF:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">RG:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">CNH:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">Data de Nascimento:</p>
                    <br></br>
                    <input class="info1" type="date"/>
                    

                </div>

                <div class="form-2">

                <br></br><br></br><br></br>
                    
                    <p class="in-2">Endereço:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br><br></br>
                    
                    <p class="in-1">Contato:</p>
                    <br></br>
                    <input class="info" type="tel"/>
                    
                    <br></br>
                    
                    <p class="in-1">Modelo:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">Marca:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">Ano de fabricação:</p>
                    <br></br>
                    <input class="info1-1" type="number"/>
                    
                </div>

                <div class="form-3">
                    
                <br></br><br></br><br></br><br></br>
                    
                    <p class="in-2">Quilômetragem:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">Data de compra:</p>
                    <br></br>
                    <input class="info-7" type="date"/>
                    
                    <br></br>
                    
                    <p class="in-1">Placa:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                    
                    <p class="in-1">Vendedor:</p>
                    <br></br>
                    <input class="info" type="text"/>
                    
                    <br></br>
                        
                        <p class="in-1-1">Cód. Veículo:</p>
                        <br></br>
                        <input class="info2" type="Number"/>

                    <Link to="/cadastrocliente" class="aaaa"> Cadastrar </Link>
                </div>
            </div>

        </section>

    </main>

    );
}