import "./footer.css";
import Facebook from '../img/Footer/facebook.png';
import Instagram from '../img/Footer/instagram.png';
import MortalKombat from '../img/Footer/mortal-kombat.png';
import Twitter from '../img/Footer/twitter.png';

function Footer() {
  return (
    <div className='divPrincipalFooter'>
      <hr className="hr"></hr>
      <section class="redes-sociales">
				<h1>Redes Principales:</h1>
        <a href="https://mk11.mortalkombat.com/es-AR" target='_blank'>
          <img src={MortalKombat} className="icons"/>
        </a>
				
        <a href="https://www.facebook.com/MortalKombat/" target='_blank'>
        <img src={Facebook} className="icons"/>
        </a>
				
        <a href="https://twitter.com/MortalKombat" target='_blank'>
          <img src={Twitter} className="icons"/>
        </a>
				
        <a href="https://www.instagram.com/mortalkombat/" target='_blank'>
          <img src={Instagram} className="icons"/>
        </a>

			</section>
      <p className="pfooter">
        Mortal Kombat's Project es un proyecto con Vite en programación.
      </p>
    </div>
  )
}

export default Footer;