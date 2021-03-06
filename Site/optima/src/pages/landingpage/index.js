import './index.scss';
import '../commom/commom.css';
import { Link } from 'react-router-dom';


export default function index() {
    return (
        <main className='landing-page'>
            <div id="home" className='f1-container'>
                <section className="f1">
                    <div className='f1-cab'>
                        <Link to='/'>
                            <img className='f1-log' src="./assets/img/logo.svg" width="180" height="90" alt='' />
                        </Link>

                        <a className='f2-botao' href="/login"> Login </a>

                    </div>

                    <div className='f1-text'>

                        <h1 className='f1-in-1'>Procurando seu semi-novo?</h1>
                        <p className='f1-in-2'>A optima te oferece uma váriação de modelos, com preços acessíveis e serviços de
                            qualidade que você só encontra aqui.</p>

                        <div className='f1-contato'>
                        <a className='.f1-contato-link' href="https://api.whatsapp.com/send?phone=5511988749207">   
                            <div className='f1-contato-1'> Contato </div>
                            <div className='f1-contato-img1'> <img className='f1-contato-img2' src="./assets/img/icons8-whatsapp.svg" alt='' />  </div>
                            </a>
                        </div>
                        </div>
                        <div className='f1-blue'> </div>

                   


                </section>


                <section id="info" className='f1-f2'>

                    <div className='info2'>
                        <h2 className='f1-in-3'>Sobre a</h2>

                        <img className='f1-log-2' src="./assets/img/optima black.png" width="140" height="100" alt='' />
                    </div>

                    <div className='f1-info'>
                        <div className='f1-info2'>
                            <p className='f1-in-4'>
                                Atuando no mercado veicular desde 2013 e atendendo mais de 17 estados, a <b> Optima </b> conta com uma
                                equipe de profissionais capacitados e de pronto atendimento, agrupando confiabilidade, conforto
                                e prontidão. </p>
                            <p className='f1-in-5'>
                                Afiliada com a <b> WebMotors</b>, a Optima conta com Semi-novos revisados por especialistas e com a
                                documentação completa.
                            </p>
                        </div>

                        <div>

                            <div className='f1-images'>

                                <img className='f1-boss' src="./assets/img/boss.png" alt='' />

                                <img className='f1-equipe' src="./assets/img/equipe.png" alt='' />

                            </div>


                        </div>

                    </div>

                </section>

                <section className='f1-f3'>

                    <div className='f1-f3-1'>

                        <div className='f1-f3-frases'>
                            <div className='f1-f3-frases-float'>
                            <h1 className='f1-in-6'>O SEU SEMI-NOVO</h1>
                            <h1 className='f1-in-7'>ESTA AQUI</h1>
                            </div>
                            <p className='f1-in-8'>O design do novo Jetta GLI continua destacado com suas linhas dinâmicas e superfícies
                                bem definidas mantendo o apelo esportivo. No interior muita tecnologia, luxo e conforto. Podemos
                                destacar tambem seu estofado confortavel.</p>
                        </div>

                    </div>

                    <div>
                        <img className='f1-jet' src="./assets/img/jetta.png" alt='' />
                    </div>

                </section>


                <section className='f1-f4'>

                    <div className='f1-cards'>

                        <div className='f1-card-1'>

                            <img className='f1-cel' src="./assets/img/celular.png" alt='' />

                            <p className='f1-in-9'>A concessionaria também se dispõe a ajudar os interessados em nossos veiculos pelo WhatsApp para
                                ajuda-los respondendo suas duvidas e fazer um convite para virem à loja presencial.</p>

                        </div>

                        <div className='f1-card-2'>

                            <img class='f1-lamp' src="./assets/img/lampada.png" alt='' />

                            <p className='f1-in-10'> A optima tem como ideia principal em nosso atendimento, a finalização de nossas vendas e a ajuda ao comprador a conseguir achar o melhor veículo para sua necessidade e desejo. </p>

                        </div>

                        <div className='f1-card-3'>

                            <img className='f1-oil' src="./assets/img/óleo.png" alt='' />

                            <p className='f1-in-11'> Nós da optima temos como serviço adicional, que na compra do seu primeiro semi-novo, garante uma troca de oléo gratuita. </p>

                        </div>

                    </div>

                </section>

                <section className='f1-f5'>

                    <div className='f1-cars'>

                        <div className='f1-car-1'>

                            <h2 className='f1-in-12'>JETTA</h2>

                            <img className='f1-c-1' src="./assets/img/jetta 2021.png" alt='' />

                            <h3 className='f1-in-13'>A partir de: R$ 79.000</h3>

                            <a className='tag-a' href="https://api.whatsapp.com/send?phone=5511988749207"><button className='f1-bt-4'>Estou interessado</button> </a>


                        </div>

                        <div className='f1-car-2'>

                            <h2 className='f1-in-14'>IX 35</h2>

                            <img className='foto' src="./assets/img/IX 35.png" alt='' />

                            <h3 className='f1-in-15'>A partir de: R$ 60.000</h3>

                            <a className='tag-a' href="https://api.whatsapp.com/send?phone=5511988749207"><button className='f1-bt-5'> Estou interessado </button> </a>

                        </div>

                        <div className='f1-car-3'>

                            <h2 className='f1-in-16'>CIVIC</h2>

                            <img className='f1-c-3' src="./assets/img/CIVIC 2021 PNG 1.png" alt='' />

                            <h3 className='f1-in-17'>A partir de: R$ 92.000</h3>

                            <a className='tag-  a' href="https://api.whatsapp.com/send?phone=5511988749207"> <button className='f1-bt-6'>Estou Interessado </button>
                            </a>

                        </div>
                    </div>

                </section>


                <section className='f1-rodape'>
                    <div className='f1-r-d1'>
                        <Link to="/landingpage"> <img className='f1-r-logo' src="./assets/img/optima white.png" alt='' /> </Link>
                        <p className='f1-r-in-18'> &copy;Optima 2022</p>
                    </div>
                    <div className='f1-r-d2'>

                        <a href="https://www.instagram.com/"><img className='f1-r-img1' src="./assets/img/instagram.png" alt='' />
                        </a>


                        <a href="https://twitter.com/"><img className='f1-r-img2' src="./assets/img/icons8-twitter-250.png" alt='' />
                        </a>

                        <a href="https://www.facebook.com/"><img className='f1-r-img3' src="./assets/img/facebook.svg" alt='' />
                        </a>
                    </div>
                    <div className='f1-r-tpc'>
                        <div className='f1-r-tpc1'>
                            <h3 className='f1-in-19'>Inicio</h3>
                            <p className='f1-in-20'> <a href="#home" class="f1-in-20" > Home </a> </p>
                            <Link to="/pagecarros" className='f1-in-20' > <p className='f1-in-20' >Veiculos</p> </Link>
                        </div>
                        <div className='f1-r-tpc2'>
                            <h3 className='f1-in-19'>Sobre nós</h3>
                            <div className='transi'>    <a className='f1-in-21' href="#info"> <p className='f1-in-20'>Informações da empresa </p> </a> </div>
                            <a className='f1-in-20' href="https://api.whatsapp.com/send?phone=5511988749207"><p className='f1-in-20'>Contato</p></a>
                        </div>
                        <div className='f1-r-tpc3'>
                            <h3 className='f1-in-19'>Suporte</h3>
                            <a className='f1-in-20' href="https://api.whatsapp.com/send?phone=5511988749207"><p className='f1-in-20'>FAQ</p> </a>
                            <a className='f1-in-20' href="https://api.whatsapp.com/send?phone=5511988749207"><p className='f1-in-20'>Chat</p> </a>
                        </div>
                    </div>

                    <div className='aaaa'>
                        <div className='f1-r-c4'>
                            <img className='f1-r-img-4' src="./assets/img/icons8-whatsapp-192.png" alt='' />
                            <p className='f1-r-in-21'>11 59746879</p>
                        </div>
                        <div>
                            <p className='f1-r-in-22'> Optimaconce@gmail.com</p>

                            <p className='f1-r-in-23'>Av. das nações unidas,1206 - São Paulo - 04776-002</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}