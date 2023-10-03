import start from './imgs/star.svg';
import vino from './imgs/vino.jpg';
import tue from './imgs/tue.jpg';
import derek from './imgs/derek.jpg';
import './Comentarios.scss';


function Comentarios() {
  return (
  <div className='container'>
    <h1>Comentarios dos nossos Clientes</h1>

    <section className='cards'> 

        <div className='card'>
            <img className='user' src={tue}></img>
            <h3>Matuê</h3>
            <div className='start'>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
            </div>

            <p>Eu achei os hamburguers com uma otima qualidade e com o preço justo, alem do mais que a entrega foi muito rapida, dando juz ao nome kkk, com certeza comprarei de novo, e tambem é uma otima opção para quem é vegano, pois são varias opçoes de hamburguers veganos, e o atendimento e o suporte deles tambem são otimos nada a reclamar </p>


        </div>


        <div className='card'>
            <img className='user' src={vino}></img>
            <h3>Yunk Vino</h3>
            <div className='start'>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
            </div>

            <p>Eu achei os hamburguers com uma otima qualidade e com o preço justo, alem do mais que a entrega foi muito rapida, dando juz ao nome kkk, com certeza comprarei de novo, e tambem é uma otima opção para quem é vegano, pois são varias opçoes de hamburguers veganos, e o atendimento e o suporte deles tambem são otimos nada a reclamar </p>
            
            
        </div>



        <div className='card'>
            <img className='user' src={derek}></img>
            <h3>Derek</h3>
            <div className='start'>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
                <img className='star' src={start}></img>
            </div>

            <p>Eu achei os hamburguers com uma otima qualidade e com o preço justo, alem do mais que a entrega foi muito rapida, dando juz ao nome kkk, com certeza comprarei de novo, e tambem é uma otima opção para quem é vegano, pois são varias opçoes de hamburguers veganos, e o atendimento e o suporte deles tambem são otimos nada a reclamar </p>

            
        </div>
        </section>

    </div>
  );
}

export default Comentarios;
