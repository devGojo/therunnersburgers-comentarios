import {FaFacebook, FaInstagram, FaWhatsapp  } from 'react-icons/fa'
import './rodape.scss'
import logo from'./imgs/LOGO_THE_RUNNER_BURGUERS.png'

function rodape(){
    return(



        <footer>

            <div className='footer-content'>
                <div className='footer-contacts'>
                    <img src={logo}></img>
                    

                    <div className='social-midia'>

                        <a href='#' className='footer-link' id='facebook'>
                            <li class="<FaFacebook/>">
                                <FaFacebook />
                            </li>
                        </a>

                        <a href='https://www.instagram.com/1ryanzy/' className='footer-link' id='instagram'>
                            <li class="fa-brands fa-facebook-f">
                                <FaInstagram />
                            </li>
                        </a>

                        <a href='#' className='footer-link' id='whatsapp'>
                            <li class="fa-brands fa-whatsapp">
                                <FaWhatsapp />
                            </li>
                        </a>

                    </div>
                </div>
                <ul className="footer-list">
                    <li>
                        <h3>Home</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Status Do Pedido</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Carrinho</a>
                    </li>

                    <li>
                        <a href="https://open.spotify.com/playlist/4eX0qyYqR3n8Fiu2thWGXm?si=046e66143623479f&pt=20f4cf16039d3a1ceb493d316c5d0482" className="footer-link">Fale conosco</a>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Combos</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Bebidas</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Batatas</a>
                    </li>
                </ul>

                <div id="footer_subscribe">
                    <h3>Subscribe</h3>

                    <p>
                        The Runners Burguers, Mais que uma hamburgueria, uma Correria
                    </p>



                </div>
            </div>

            <div id='footer_copyright'>
                &copy; 2023 all rigtht reservt
            </div>

        </footer>


        

    );
}

export default rodape