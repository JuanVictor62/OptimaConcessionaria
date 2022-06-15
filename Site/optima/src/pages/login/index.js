import './index.scss'
import '../commom/commom.css'
import Cabecalho from '../../components/cabecalho'
import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { login } from '../../api/usuarioAPI'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

export default function Index() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

  async function entrarClick() {
    ref.current.continuousStart();
    setCarregando(true)

    try {
        const r = await login(nome, senha);
        storage('usuario-logado', r);

        setTimeout(() => { 
            navigate('/pagecarros');
        }, 2000)

    } catch (err) {
        ref.current.complete();
        setCarregando(false);

        if( err.response.status === 401) {
            setErro(err.response.data.erro);
        }
    }

    }   

    return (
        <main class="f2-login">
            <LoadingBar color='#f11946' ref={ref} />
            <Cabecalho />
            <div class="f2-fundo"> 
                <div class="f2-painellogin">
                    <img class="f2-icon" src="../../assets/img/icon-usuario.png" alt=''/>
                    
                    <p class="f2-user1">Usuario:</p>
                    <input class="f2-user2" type="text" id="login" value={nome} onChange={e => setNome(e.target.value)} />

                    <p class="f2-senha1">Senha:</p> 
                    <input class="f2-senha2" type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)}/>

                    <p></p>
                    <button className='f2-logarr' onClick={entrarClick} disabled={carregando}> Entrar </button>
                    <div>
                        {erro}
                    </div>

                </div>            
            </div>
        </main>
    );
}
