import './index.scss';
import '../commom/commom.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import storage from 'local-storage'
import { cadastrarVeiculo, enviarImagemVeiculo, alterarVeiculo } from '../../api/veiculoAPI';
import { toast } from 'react-toastify';

export default function Index() {
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [valor, setValor] = useState(0);
    const [placa, setPlaca] = useState('');
    const [anofab, setAnoFab] = useState(0);
    const [km, setKm] = useState(0);
    const [codigo, setCodigo] = useState(0);
    const [classe, setClasse] = useState('');
    const [imagem, setImagem] = useState('');
    const [id, setId] = useState(0);


    async function salvarClick() {
        try {
            const usuario = storage('usuario-logado').id;

            // let idVeiculo = 0;


            if (id === 0) {
                const novoVeiculo = await cadastrarVeiculo(modelo, marca, valor, placa, anofab, km, codigo, classe, usuario);
                const r = await enviarImagemVeiculo(novoVeiculo.id, imagem);

                setId(novoVeiculo.id);
            }

            else {
                await alterarVeiculo(modelo, marca, valor, placa, anofab, km, codigo, classe, usuario, id);
                await enviarImagemVeiculo(id, imagem);
            }

            toast.dark(" 🚗 
            
            
            
            
            veiculo cadastrado com sucesso! ");


        } catch (err) {
            toast("Ocorreu um erro, tente novamente!");
        }
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem);
    }




    return (
        <section className='p4-container'>
            <div className='p4-cabeçalho'>
                <div className='p4-logo'>
                    <img className='logo' src="../../assets/img/optima white.png" alt="" />
                </div>
                <div className='p4-bt-voltar'>
                    <Link to="/pagecarros" className='p4-btvoltar'> voltar </Link>
                </div>
            </div>

            <div className='p4-text-titulo'>
                <h1 className='p4-titulo'>
                    Cadastro de novos veículos
                </h1>
            </div>


            <div className='p4-background'>
                <div className='p4-campos'>
                    <div className='p4-coluna-1'>
                        <div>
                            <p className='p4-p1'> Modelo: </p>
                            <input className='p4-input-1' type="text" value={modelo} onChange={e => setModelo(e.target.value)} />
                        </div>
                        <div>
                            <p className='p4-p2'> Marca: </p>
                            <input className='p4-input-2' type="text" value={marca} onChange={e => setMarca(e.target.value)} />
                        </div>
                        <div>
                            <p className='p4-p3'> Ano de Fabricação: </p>
                            <input className='p4-input-3' type="number" value={anofab} onChange={e => setAnoFab(e.target.value)} />
                        </div>
                        <div>
                            <p className='p4-p4'> Quilometragem: </p>
                            <input className='p4-input-4' type="text" value={km} onChange={e => setKm(e.target.value)} />
                        </div>

                        <div>
                            <p className='p4-p4'> Classe: </p>
                            <input className='p4-input-4' type="text" value={classe} onChange={e => setClasse(e.target.value)} />
                        </div>

                    </div>

                    <div className='p4-coluna-2'>
                        <div>
                            <p className='p4-p5'> Valor: </p>
                            <input className='p4-input-5' type="number" value={valor} onChange={e => setValor(e.target.value)} />
                        </div>


                        <div>
                            <p className='p4-p6'> Código do Carro: </p>
                            <input className='p4-input-6' type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
                        </div>

                        <div>
                            <p className='p4-p8'> Placa: </p>
                            <input className='p4-input-8' type="text" value={placa} onChange={e => setPlaca(e.target.value)} />
                        </div>

                        <div>
                            <p className='p4-p7'> Foto do Veículo: </p>
                            <div className='p4-edit-img'>
                                <div className='upload-veiculo' onClick={escolherImagem} >

                                    {!imagem &&
                                        <img className='img-upload' src="../../public/img/LogoCamera.png" alt="" />
                                    }

                                    {imagem &&
                                        <img className='imagemCapa' src={mostrarImagem()} alt='' />
                                    }

                                    <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
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
