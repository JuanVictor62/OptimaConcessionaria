import './index.scss';
import '../commom/commom.css';

export default function index() {
    return(
        <section class="p4-container">
        <div  class="p4-cabeçalho">
             <div class="p4-logo">
                 <img class="logo"  src="../../assets/img/optima white.png" alt=""/>
             </div>
             <div class="p4-bt-voltar">
                 <a href="../pagecarros" class="p4-btvoltar"> voltar </a>
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
                        <input class="p4-input-1" type="text" />
                    </div>
                    <div> 
                        <p class="p4-p2"> Marca: </p>
                        <input class="p4-input-2"  type="text" />
                    </div>
                    <div> 
                        <p class="p4-p3"> Ano de Fabricação: </p>
                        <input class="p4-input-3" type="number" />
                    </div>
                    <div> 
                        <p class="p4-p4"> Quilometragem: </p>
                        <input class="p4-input-4"  type="text" />
                    </div>

                </div>

                <div class="p4-coluna-2">
                    <div> 
                        <p class="p4-p5"> Valor: </p>
                        <input class="p4-input-5"  type="number" />
                    </div>
                    <div> 
                        <p class="p4-p6"> Código do Carro: </p>
                        <input class="p4-input-6"  type="number" />
                    </div>
                    <div> 
                        <p class="p4-p7"> Foto do Veículo: </p>
                        <div class="p4-edit-img">
                            <center>
                            <img class="p4-img-ft"  src="../../assets/img/LogoCamera.png" alt=""/>
                            </center>
                        </div>
                        
                    </div>
                </div>
            </div>
                <a href="/cadastrocarro" alt='' class="p4-btn-registrar"> Resgistrar </a>
        </div>
    </section>

    );
}
