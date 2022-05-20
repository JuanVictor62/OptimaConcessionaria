import './index.scss';
import '../commom/commom.css';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <main class="f2-login">
            <div class="f2-cabecalho">
                <Link to="/landingpage"> 
                    <img class="f2-logo" src="./assets/img/logo.svg" alt=''/> 
                </Link>
                
                <Link to="/landingpage" class="f2-botao">
                    Voltar
                </Link>
            </div>

            <div class="f2-fundo"> 
                <div class="f2-painellogin">
                    <img class="f2-icon" src="../../assets/img/icon-usuario.png" alt=''/>
                    
                    <p class="f2-user1">Usuario:</p>
                    <input class="f2-user2" type="text" id="login"/>

                    <p class="f2-senha1">Senha:</p> 
                    <input class="f2-senha2" type="password" id="senha"/>

                    <p></p>
                    <Link to="/pagecarros"> <input class="f2-logar" type="submit" onclick="logar(); false"/> </Link>

                </div>            
            </div>
        </main>
    );
}
