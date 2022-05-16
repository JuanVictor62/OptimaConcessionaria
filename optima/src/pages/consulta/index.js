import './index.scss';
import '../commom/commom.css';

export default function index() {
    return(
   <main class="f6-faixa6">
        <section>
            <div class="f6-cabecalho">
                <a href="../landingpage">
                    <img class="f6-logo" src="../../assets/img/Logo.svg" alt=''/>
                </a>
                <a class="f6-botao" href="../pagecarros" alt=''>
                    Voltar
                </a>
            </div>

        </section>

        <section>
            <div class="f6-principal">
                <div class="f6-buscar1">
                </div>

                <div>
                    <input class="f6-pesquisar" type="search" placeholder="Buscar"/>
                    <img class="f2-img" src="../../assets/img/image 25.png" onclick="executar()" alt=''/>
                </div>

                <div class="f6-fndt">
                    <h1 class="f6-titulo">Consultar Pedidos</h1>
                </div>

            <div class="f6-consulta">
                <div class="f6-cod">
                    <h1 class="f6-topic">Cod.</h1>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                    <p class="f6-cod2">00000</p>
                </div>

                <hr></hr>

                <div class="f6-client">
                    <h1 class="f6-topic"> Cliente </h1>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>
                    <p class="f6-desc1">Gabriel Santos</p>

                </div>

                <hr></hr>

                <div class="f6-cpf">
                    <h1 class="f6-topic">CPF</h1>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                    <p class="f6-desc2">08844126708</p>
                </div>

                <hr></hr>

                <div class="f6-model">
                    <h1 class="f6-topic">Modelo</h1>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>
                    <p class="f6-desc3">Honda Civic</p>

                </div>

                <hr></hr>

                <div class="f6-value">
                    <h1 class="f6-topic"> Valor</h1>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                    <p class="f6-desc4">R$ 92.999,99</p>
                </div>

                <hr></hr>

                <div class="f6-contato">
                    <h1 class="f6-topic">Contato</h1>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                    <p class="f6-desc5">(11) 985476300</p>
                </div>
            </div>
        </div>
    </section>

    <section class="f1-rodape">
        <div f1-r-d1>
            <a href="../landing page/index.html"> 
                <img class="f1-r-logo" src="../../assets/img/optima white.png" alt=''/> 
            </a>
            <p class="f1-r-in-18"> &copy;Optima 2022</p>
        </div>
        <div class="f1-r-d2">

            <a href="https://www.instagram.com/">
                <img class="f1-r-img1" src="../../assets/img/instagram.png" alt=''/>
            </a>


            <a href="https://twitter.com/">
                <img class="f1-r-img2" src="../../assets/img/icons8-twitter-250.png" alt=''/>
            </a>

            <a href="https://www.facebook.com/">
                <img class="f1-r-img3" src="../../assets/img/facebook.svg" alt='' />
            </a>
        </div>
        <div class="f1-r-tpc">
            <div class="f1-r-tpc1">
                <h3 class="f1-in-19">Inicio</h3>
                <p class="f1-in-20"> 
                    <a class="f1-in-20" href="../landingpage"> 
                        Home 
                    </a> 
                </p>
                <a class="f1-in-20" href="../pagecarros">
                    <p class="f1-in-20">Veiculos</p>
                </a>
            </div>
            <div class="f1-r-tpc2">
                <h3 class="f1-in-19">Sobre nós</h3>
                <a class="f1-in-20" href="#info">
                    <p class="f1-in-20">Informações da empresa </p>
                </a>
                <a class="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                    <p class="f1-in-20">Contato</p>
                </a>
            </div>
            <div class="f1-r-tpc3">
                <h3 class="f1-in-19">Suporte</h3>
                <a class="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                    <p class="f1-in-20">FAQ</p>
                </a>
                <a class="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                    <p class="f1-in-20">Chat</p>
                </a>
            </div>
        </div>

        <div class="aaaa">
            <div class="f1-r-c4">
                <img class="f1-r-img-4" src="../../assets/img/icons8-whatsapp-192.png" alt=''/>
                <p class="f1-r-in-21">11 59746879</p>
            </div>
            <div>
                <p class="f1-r-in-22">Optimaconce@gmail.com</p>

                <p class="f1-r-in-23">Av. das nações unidas,1206 - São Paulo - 04776-002</p>
            </div>
        </div>
    </section>



        
   </main> 

    
    );
}