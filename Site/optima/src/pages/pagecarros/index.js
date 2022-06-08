import './index.scss';
import '../commom/commom.css';
import {Link} from 'react-router-dom';

export default function index() {
    return(
        <main className="container">

        <div className="f2-cabecalho">
            <Link to="/landingpage"> 
                <img className="f2-logo62" src="../../assets/img/Logo.svg" alt=''/> 
            </Link>
            
            <Link to="/cadastrocarro" className="f3-botao">Cad. veículos</Link>

            <Link to="/landingpage" className="f2-botao">Voltar</Link>


            <div className="f1-bts">
                <div className="f1-bt-1">
                    <p className="f1-bt-1-1"> Classe </p>
                        <img className="f1-bt-1-2" src="../../assets/IMG/icons8-chevron-right-96 1.png" alt=""/>
                    <div className="f1-bt-aa">
                        <p className="f1-bt-a"> Suv </p>
                        <p className="bg"> Esportivo</p>
                        <p className="bg"> Sedan</p>
                        <p className="bg"> Compacto</p>
                    </div>

                </div>

                <div className="f1-bt-2">
                    <p className="f1-bt-2-1"> Marcas</p>
                    <img className="f1-bt-2-2" src="../../assets/img/icons8-carro-64.png" alt=''/>
                </div>

                <div className="f1-bt-3">
                    <p className="f1-bt-3-1"> Ano </p>
                    <img className="f1-bt-3-2" src="../../assets/img/icons8-calendário-96 1.png" alt=''/>
                </div>
            </div>

        </div>

        <section className="f2">

            <div className="f2-1">
                <form>
                    <input className="f2-1-1" type="search" placeholder="Buscar"/>

                    <img className="f2-img" src="../../assets/img/image 25.png" onclick="executar()" alt=''/>
                </form>


            </div>

<div className="carros-geral">

    <div className="carros">

        <div className="name">
            <p className="title-1"> IX 35 </p>
        </div>

        <div className="card-1">

            <div className="car-1">
                <img className="ix-menu" src="../../assets/img/ix35 2021 png 1.png" alt=""/>

            </div>

            <div className="card-2-1">
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

                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>

    <div className="carros">

        <div className="name">
            <p className="title-2"> HR-V
            </p>
        </div>

        <div className="card-1">

            <div className="car-2">
                <img className="HRV-2" src="../../assets/img/HRV.com.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>

    <div className="carros">

        <div className="name">
            <p className="title-3"> Civic
            </p>
        </div>

        <div className="card-1">

            <div className="car-3">
                <img src="../../assets/img/CIVIC 2021 PNG 1.png" alt=""/>

            </div>

            <div className="card-2-1">
                <b> Marca: </b> Honda 
                <br/>
                <b> Ano: </b> 2021
                <br/>
                <b> Classe: </b> Esportivo
                <br/>
                <b> Km: </b> 120.000
                <br/>
                <b> Valor: </b> R$ 92.999,00
                    <p className="card-2-2-1"> <b>Código:</b> 00000 </p>
            </div>
        </div>
    </div>

   

    <div className="carros">

        <div className="name">
            <p className="title-4"> Onix
            </p>
        </div>

        <div className="card-1">

            <div className="car-4">
                <img src="../../assets/img/Onix 2019 PNG 1.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>
</div>

<div className="carros-geral">
    <div className="carros">

        <div className="name">
            <p className="title-5"> Compass
            </p>
        </div>

        <div className="card-1">

            <div className="car-5">
                <img className="Jeep-5" src="../../assets/img/Renagade.com.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>
<div className="carros">

    <div className="name">
        <p className="title-6"> Cronos
        </p>
    </div>

    <div className="card-1">

        <div className="car-6">
            <img src="../../assets/img/Fiat Cronos 1.png" alt=""/>

        </div>

        <div className="card-2-1">
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
                <p className="card-2-2"> Código: 00000 </p>

        </div>
    </div>
</div>

<div className="carros">

    <div className="name">
        <p className="title-7"> Jetta</p>
    </div>

    <div className="card-1">

        <div className="car-7">
            <img src="../../assets/img/jetta 2021.png" alt=""/>
        </div>

        <div className="card-2-1">
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
                <p className="card-2-2"> <b>Código:</b> 00000 </p>

        </div>
    </div>
</div>

<div className="carros">

    <div className="name">
        <p className="title-8"> Argo
        </p>
    </div>

    <div className="card-1">

        <div className="car-8">
            <img src="../../assets/img/ARGO.png" alt=""/>

        </div>

        <div className="card-2-1">
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
                <p className="card-2-2"> <b>Código:</b> 00000 </p>

        </div>
    </div>
</div>
</div>

<div className="carros-geral">
    <div className="carros">

        <div className="name">
            <p className="title-9"> Corolla
            </p>
        </div>

        <div className="card-1">

            <div className="car-9">
                <img className="corola-9" src="../../assets/img/COROLAPRETO.com.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>

    <div className="carros">

        <div className="name">
            <p className="title-10"> KÁ
            </p>
        </div>

        <div className="card-1">

            <div className="car-10">
                <img className="ká-10" src="../../assets/img/FORD KA.com.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>

    <div className="carros">

        <div className="name">
            <p className="title-11"> Polo
            </p>
        </div>

        <div className="card-1">

            <div className="car-11">
                <img className="polo-11" src="../../assets/img/POLO.com.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>

    <div className="carros">

        <div className="name">
            <p className="title-12"> CRV
            </p>
        </div>

        <div className="card-1">

            <div className="car-12">
                <img className="CRV-12" src="../../assets/img/CRVV.com.png" alt=""/>

            </div>

            <div className="card-2-1">
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
                    <p className="card-2-2"> <b>Código:</b> 00000 </p>

            </div>
        </div>
    </div>
    </div>
</section>

<footer className="f1-rodape">
        <div f1-r-d1>
            <a href="/landingpage"> 
                <img className="f1-r-logo" src="../../assets/img/optima white.png" alt=''/>
             </a>
            <p className="f1-r-in-18"> &copy;Optima 2022</p>
        </div>
        <div className="f1-r-d2">
            <a href="/landingpage">
                <img className="f1-r-img1" src="../../assets/img/instagram.png" alt=''/>
            </a>
            
            <a href="/landingpage">
                <img className="f1-r-img2" src="../../assets/img/icons8-twitter-250.png" alt=''/>
            </a>
            <a href="/landingpage">
                <img className="f1-r-img3" src="../../assets/img/facebook.svg" alt=''/>
            </a>
        </div>
        <div className="f1-r-tpc">
            <div className="f1-r-tpc1">
                <h3 className="f1-in-19">Inicio</h3>
                <p className="f1-in-20"> 
                    <Link className="f1-in-20" to="/" alt=''>
                        Home 
                    </Link>
                </p>
                <Link className="f1-in-20" to="/pagecarros" alt=''> 
                    <p className="f1-in-20">
                        Veiculos
                    </p> 
                </Link>
            </div>
            <div className="f1-r-tpc2">
                <h3 className="f1-in-19">Sobre nós</h3>
                <Link className="f1-in-20" to="/" alt=''> 
                    <p className="f1-in-20">
                        Informações da empresa 
                    </p> 
                </Link>
                
                <a className="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207">
                    <p className="f1-in-20">
                        Contato
                    </p>
                </a>
            </div>
            <div className="f1-r-tpc3">
                <h3 className="f1-in-19">Suporte</h3>
                <a className="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                    <p className="f1-in-20">FAQ</p> 
                </a>
                <a className="f1-in-20" href="https://api.whatsapp.com/send?phone=5511988749207" alt=''>
                    <p className="f1-in-20">Chat</p> 
                </a>
            </div>
        </div>

        <div>
            <div className="f1-r-c4">
                <img className="f1-r-img-4" src="../../assets/img/icons8-whatsapp-192.png" alt=''/>
                <p className="f1-r-in-21">11 59746879</p>
            </div>
            <div>
                <p className="f1-r-in-22">Optimaconce@gmail.com</p>

                <p className="f1-r-in-23">Av. das nações unidas,1206 - <br></br> São Paulo - 04776-002</p>
            </div>
        </div>
    </footer>

        </main>

    );
}