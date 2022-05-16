import './index.scss';
import '../commom/commom.css';

export default function index() {
    return(
        <main class="container">

        <div class="f2-cabecalho">
            <a href="../landingpage"> 
                <img class="f2-logo" src="../../assets/img/Logo.svg" alt=''/> 
            </a>
            
            <a href="../cadastrocliente" class="f1-botao">Cadastro</a>

            <a href="../consulta" class="f3-botao">Pedidos </a>

            <a class="f2-botao" href="../landingpage">Voltar</a>


            <div class="f1-bts">
                <div class="f1-bt-1">
                    <p class="f1-bt-1-1"> Classe </p>
                        <img class="f1-bt-1-2" src="../../assets/IMG/icons8-chevron-right-96 1.png" alt=""/>
                    <div class="f1-bt-aa">
                        <p class="f1-bt-a"> Suv </p>
                        <p class="bg"> Esportivo</p>
                        <p class="bg"> Sedan</p>
                        <p class="bg"> Compacto</p>
                    </div>

                </div>

                <div class="f1-bt-2">
                    <p class="f1-bt-2-1"> Marcas</p>
                    <img class="f1-bt-2-2" src="../../assets/img/icons8-carro-64.png" alt=''/>
                </div>

                <div class="f1-bt-3">
                    <p class="f1-bt-3-1"> Ano </p>
                    <img class="f1-bt-3-2" src="../../assets/img/icons8-calendário-96 1.png" alt=''/>
                </div>
            </div>

        </div>

        <section class="f2">

            <div class="f2-1">
                <form>
                    <input class="f2-1-1" type="search" placeholder="Buscar"/>

                    <img class="f2-img" src="../../assets/img/image 25.png" onclick="executar()" alt=''/>
                </form>


            </div>

<div class="carros-geral">

    <div class="carros">

        <div class="name">
            <p class="title-1"> IX 35 </p>
        </div>

        <div class="card-1">

            <div class="car-1">
                <img class="ix-menu" src="../../assets/img/ix35 2021 png 1.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Hyundai
                <br/>
                <b> Ano: </b> 2021
                <br/>
                <b> Classe: </b> Suv
                <br/>
                <b> Km: </b> 90.000
                <br/>
                <b> Valor: </b> R$ 64.999,99
                <br/>

                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>

    <div class="carros">

        <div class="name">
            <p class="title-2"> HR-V
            </p>
        </div>

        <div class="card-1">

            <div class="car-2">
                <img class="HRV-2" src="../../assets/img/HRV.com.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Honda
                <br/>
                <b> Ano: </b> 2017
                <br/>
                <b> Classe: </b> 
                <br/>
                <b> Km: </b> 290.000
                <br/>
                <b> Valor: </b> R$ 120.000,00
                <br/>
                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>

    <div class="carros">

        <div class="name">
            <p class="title-3"> Civic
            </p>
        </div>

        <div class="card-1">

            <div class="car-3">
                <img src="../../assets/img/CIVIC 2021 PNG 1.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Honda 
                <br/>
                <b> Ano: </b> 2021
                <br/>
                <b> Classe: </b> Esportivo
                <br/>
                <b> Km: </b> 120.000
                <br/>
                <b> Valor: </b> R$ 92.999,00
                <br/>
                    <p class="card-2-2"> Código:00000 </p>
            </div>
        </div>
    </div>

   

    <div class="carros">

        <div class="name">
            <p class="title-4"> Onix
            </p>
        </div>

        <div class="card-1">

            <div class="car-4">
                <img src="../../assets/img/Onix 2019 PNG 1.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Chevolet
                <br/>
                <b> Ano: </b> 2019      
                <br/>
                <b> Classe: </b> Compacto
                <br/>
                <b> Km: </b> 170.000
                <br/>
                <b> Valor: </b> R$ 54.999,99
                <br/>
                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>
</div>

<div class="carros-geral">
    <div class="carros">

    <div class="name">
        <p class="title-5"> Compass
        </p>
    </div>

    <div class="card-1">

        <div class="car-5">
            <img class="Jeep-5" src="../../assets/img/Renagade.com.png" alt=""/>

        </div>

        <div class="card-2-1">
            <b> Marca: </b> JEEP
            <br/>
            <b> Ano: </b> 2017
            <br/>
            <b> Classe: </b> Suv
            <br/>
            <b> Km: </b> 70.000
            <br/>
            <b> Valor: </b> R$ 139.999,99
            <br/>
                <p class="card-2-2"> Código:00000 </p>

        </div>
    </div>
</div>

<div class="carros">

    <div class="name">
        <p class="title-6"> Cronos
        </p>
    </div>

    <div class="card-1">

        <div class="car-6">
            <img src="../../assets/img/Fiat Cronos 1.png" alt=""/>

        </div>

        <div class="card-2-1">
            <b> Marca: </b> FIat
                <br/>
            <b> Ano: </b> 2021
                <br/>
            <b> Classe: </b> Sedan  
                <br/>
            <b> Km: </b> 30.000
                <br/>
            <b> Valor: </b> R$ 89.999,99
                <br/>
                <p class="card-2-2"> Código: 00000 </p>

        </div>
    </div>
</div>

<div class="carros">

    <div class="name">
        <p class="title-7"> Jetta</p>
    </div>

    <div class="card-1">

        <div class="car-7">
            <img src="../../assets/img/jetta 2021.png" alt=""/>
        </div>

        <div class="card-2-1">
            <b> Marca: </b> Volkswagen
                <br/>
            <b> Ano: </b> 2019
                <br/>
            <b> Classe: </b> Sedan
                <br/>
            <b> Km: </b> 70.000
                <br/>
            <b> Valor: </b> R$ 78.999,99
                <br/>
                <p class="card-2-2"> Código:00000 </p>

        </div>
    </div>
</div>

<div class="carros">

    <div class="name">
        <p class="title-8"> Argo
        </p>
    </div>

    <div class="card-1">

        <div class="car-8">
            <img src="../../assets/img/ARGO.png" alt=""/>

        </div>

        <div class="card-2-1">
            <b> Marca: </b> Fiat
                <br/>
            <b> Ano: </b> 2020
                <br/>
            <b> Classe: </b> Compacto
                <br/>
            <b> Km: </b> 90.000
                <br/>
            <b> Valor: </b> R$ 67.999,99
                <br/>
                <p class="card-2-2"> Código:00000 </p>

        </div>
    </div>
</div>

<div class="carros-geral">
    <div class="carros">

        <div class="name">
            <p class="title-9"> Corolla
            </p>
        </div>

        <div class="card-1">

            <div class="car-9">
                <img class="corola-9" src="../../assets/img/COROLAPRETO.com.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Toyota
                <br/>
                <b> Ano: </b> 2021
                <br/>
                <b> Classe: </b> Sedan
                <br/>
                <b> Km: </b> 115.000
                <br/>
                <b> Valor: </b> R$ 72.999,99
                <br/>
                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>

    <div class="carros">

        <div class="name">
            <p class="title-10"> KÁ
            </p>
        </div>

        <div class="card-1">

            <div class="car-10">
                <img class="ká-10" src="../../assets/img/FORD KA.com.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Ford
                <br/>
                <b> Ano: </b> 2020
                <br/>
                <b> Classe: </b> Compacto
                <br/>
                <b> Km: </b> 160.000
                <br/>
                <b> Valor: </b> R$ 52.999,99
                <br/>
                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>

    <div class="carros">

        <div class="name">
            <p class="title-11"> Polo
            </p>
        </div>

        <div class="card-1">

            <div class="car-11">
                <img class="polo-11" src="../../assets/img/POLO.com.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> VolKSwagen
                <br/>
                <b> Ano: </b> 2021
                <br/>
                <b> Classe: </b> Compacto
                <br/>
                <b> Km: </b> 90.000
                <br/>
                <b> Valor: </b> R$ 64.999,99
                <br/>
                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>

    <div class="carros">

        <div class="name">
            <p class="title-12"> CRV
            </p>
        </div>

        <div class="card-1">

            <div class="car-12">
                <img class="CRV-12" src="../../assets/img/CRVV.com.png" alt=""/>

            </div>

            <div class="card-2-1">
                <b> Marca: </b> Honda
                <br/>
                <b> Ano: </b> 2016
                <br/>
                <b> Classe: </b> Suv
                <br/>
                <b> Km: </b> 220.000
                <br/>
                <b> Valor: </b> R$ 84.999,99
                <br/>
                    <p class="card-2-2"> Código:00000 </p>

            </div>
        </div>
    </div>
    </div>
    </div>
</section>

<footer class="f1-rodape">
        <div f1-r-d1>
            <a href="/landingpage"> 
                <img class="f1-r-logo" src="../../assets/img/optima white.png" alt=''/>
             </a>
            <p class="f1-r-in-18"> &copy;Optima 2022</p>
        </div>
        <div class="f1-r-d2">
            <a href="/landingpage">
                <img class="f1-r-img1" src="../../assets/img/instagram.png" alt=''/>
            </a>
            
            <a href="/landingpage">
                <img class="f1-r-img2" src="../../assets/img/icons8-twitter-250.png" alt=''/>
            </a>
            <a href="/landingpage">
                <img class="f1-r-img3" src="../../assets/img/facebook.svg" alt=''/>
            </a>
        </div>
        <div class="f1-r-tpc">
            <div class="f1-r-tpc1">
                <h3 class="f1-in-19">Inicio</h3>
                <p class="f1-in-20"> 
                    <a class="f1-in-20" href="../landingpage" alt=''>
                        Home 
                    </a>
                </p>
                <a class="f1-in-20" href="../pagecarros" alt=''> 
                    <p class="f1-in-20">
                        Veiculos
                    </p> 
                </a>
            </div>
            <div class="f1-r-tpc2">
                <h3 class="f1-in-19">Sobre nós</h3>
                <a class="f1-in-20" href="../landingpage" alt=''> 
                    <p class="f1-in-20">
                        Informações da empresa 
                    </p> 
                </a>
                
                <a class="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207">
                    <p class="f1-in-20">
                        Contato
                    </p>
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

        <div>
            <div class="f1-r-c4">
                <img class="f1-r-img-4" src="../../assets/img/icons8-whatsapp-192.png" alt=''/>
                <p class="f1-r-in-21">11 59746879</p>
            </div>
            <div>
                <p class="f1-r-in-22">Optimaconce@gmail.com</p>

                <p class="f1-r-in-23">Av. das nações unidas,1206 - <br></br> São Paulo - 04776-002</p>
            </div>
        </div>
    </footer>

        </main>

    );
}