import "./MKDescription.css";
import MK_Logo from "../../img/Games/MKII.jpg";

function MKII() {
  return (
    <div className="divPrincipalMKDescription">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poltawski+Nowy:wght@500&display=swap');
      </style>
      <br></br>
      <img className="MK_Logo" src={MK_Logo}></img>
      <br></br>
      Después del fracaso de Shang Tsung en Mortal Kombat, Shao Kahn decide
      solucionar la derrota de su hechicero en el torneo atrayendo a los
      guerreros de la Tierra hasta su reino, el Outworld, donde se enfrentará
      directamente con ellos.
      <br></br>
      Liu Kang y sus aliados se dirigen al Outworld con
      la esperanza de poner punto y final a la amezana del Outworld. Pero lo que
      no saben es que plan de Kahn saldrá adelante, porque tanto si acaba con
      las Fuerzas de la Luz como si no, planea invadir la Tierra…
      <br></br>
      <br></br>
    </div>
  );
}

export default MKII;
