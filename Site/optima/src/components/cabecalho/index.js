import './index.scss'
import { Link } from 'react-router-dom'

export default function Index(){
    return(
        <div class="f2-cabecalho">
            <Link to="/landingpage"> 
                <img class="f2-logo" src="./assets/img/logo.svg" alt=''/> 
            </Link>
            
            <Link to="/pagecarros" class="f2-botao">
                Voltar
            </Link>
    </div>
        )
    }
    