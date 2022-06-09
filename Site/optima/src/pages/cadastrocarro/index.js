import './index.scss';
import '../commom/commom.css';
import { Link } from 'react-router-dom';
import { useState} from 'react'
import storage from 'local-storage'
import { cadastrarVeiculo, enviarImagemVeiculo} from '../../api/veiculoAPI';
import {toast } from 'react-toastify';

export default function Index() {
    const [modelo, setModelo]= useState('');
    const [marca, setMarca]= useState('');
    const [valor, setValor]= useState(0);
    const [anofab, setAnoFab]= useState(0);
    const [km, setKm]= useState(0);  
    const [codigo, setCodigo]= useState(0);
    const [classe, setClasse]= useState('');
    const [imagem, setImagem] = useState();

    async function salvarClick() {
        try{
            const usuario = storage('usuario-logado').id;
            const novoFilme = await cadastrarVeiculo(modelo, marca, valor, anofab, km, codigo, classe, usuario);

            toast.dark('veiculo cadastro com Sucesso');
        } catch(err){
            toast.error(err.message);
        }
        }

        function escolherImagem(){
            document.getElementById('imagemCapa').click();
        }

        function mostrarImagem(){
            return URL.createObjectURL(imagem); 
        }
    return(
        <section class="p4-container">
        <div  class="p4-cabeçalho">
             <div class="p4-logo">
                 <img class="logo"  src="../../assets/img/optima white.png" alt=""/>
             </div>
             <div class="p4-bt-voltar">
                 <Link to="/pagecarros" class="p4-btvoltar"> voltar </Link>
             </div>
        </div>

        <div class="p4-text-titulo">
            <h1 class="p4-titulo">
                Cadastro de novos veículos
            </h1>
        </div>


        <div class="p4-background">
            <div class="p4-campos">
                <div class="p4-coluna-1">
                    <div> 
                        <p class="p4-p1"> Modelo: </p>
                        <input class="p4-input-1" type="text" value={modelo} onChange={e => setModelo(e.target.value)}/>
                    </div>
                    <div> 
                        <p class="p4-p2"> Marca: </p>
                        <input class="p4-input-2"  type="text" value={marca} onChange={e => setMarca(e.target.value)}/>
                    </div>
                    <div> 
                        <p class="p4-p3"> Ano de Fabricação: </p>
                        <input class="p4-input-3" type="number" value={anofab} onChange={e => setAnoFab(e.target.value)}/>
                    </div>
                    <div> 
                        <p class="p4-p4"> Quilometragem: </p>
                        <input class="p4-input-4"  type="text" value={km} onChange={e => setKm(e.target.value)}/>
                    </div>

                    <div> 
                        <p class="p4-p4"> Classe: </p>
                        <input class="p4-input-4"  type="text" value={classe} onChange={e => setClasse(e.target.value)}/>
                    </div>

                </div>

                <div class="p4-coluna-2">
                    <div> 
                        <p class="p4-p5"> Valor: </p>
                        <input class="p4-input-5"  type="number" value={valor} onChange={e => setValor(e.target.value)}/>
                    </div>
            

                    <div> 
                        <p class="p4-p6"> Código do Carro: </p>
                        <input class="p4-input-6"  type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                    </div>
                    <div> 
                        <p class="p4-p7"> Foto do Veículo: </p>
                        <div class="p4-edit-img">
                            <div className='upload-capa'onClick={escolherImagem } >

                            {!imagem &&
                                <img src="../public/img/LogoCamera.png" alt="" />
                            }

                            {imagem &&
                                <img src= {mostrarImagem()} alt='' />
                            }

                            <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
                <button className="p4-btn-registrar" onClick={salvarClick}> Resgistrar </button>
        </div>
    </section>

    );
}
