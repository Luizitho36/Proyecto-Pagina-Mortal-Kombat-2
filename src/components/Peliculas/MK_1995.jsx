import { NavLink } from "react-router-dom";
import "./MKDescription.css";
import MK_Logo from "../../img/Movies/MK_(1995).jpg";

function MK_1995() {
  return (
    <div className="divMKDescription">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap');
      </style>
      <br></br>

      <NavLink to="/peliculas/MK_1995/MK_1995_Ver" className="MK_Logo">
        <img className="MK_Logo" src={MK_Logo}></img>
      </NavLink>

      <br></br>
      Durante numerosas generaciones se ha celebrado un torneo creado por los
      dioses ancianos llamado Mortal Kombat, en el que se enfrentan los
      guerreros de la Tierra contra el hechicero Shang Tsung y el monstruo de
      cuatro brazos llamado Goro, dos guerreros del Outworld. Se decidió que si
      el Outworld ganaba diez veces consecutivas el torneo podría invadir la
      Tierra y gobernarla.
      <br></br>
      <br></br>
      El Outworld ya ha ganado los nueve torneos anteriores consecutivamente, y
      para este décimo torneo, Raiden, el dios protector de la Tierra, ha puesto
      sus esperanzas en tres guerreros: Liu Kang, un joven monje shaolin que
      pretende vengar en el torneo la muerte de su hermano a manos de Shang
      Tsung; Johnny Cage, una estrella del cine de acción que participa en el
      torneo para demostrar que sus golpes son reales; Sonya, una agente de las
      fuerzas especiales que entra en el torneo para detener a un terrorista
      llamado Kano.
      <br></br>
      <br></br>
      Pero Shang Stung no va a dejar que los mortales de la Tierra estropeen
      todo en el décimo torneo y «recluta» a dos letales asesinos con su poder
      mental: Scorpion, un espectro viviente, y Sub-Zero, un ninja con poderes
      sobre el hielo.
      <br></br>
      <br></br>
      Shang Tsung lleva a los luchadores del torneo en barco a su isla, lugar
      donde se celebra el torneo. En ese barco, Cage, Sonya y Liu Kang conocen a
      Art Lean, un gran luchador que más tarde es derrotado por Goro.
      <br></br>
      <br></br>
      En contra de lo previsto, los guerreros de la Tierra vencen sus combates:
      Sonya vence a Kano, Cage a Scorpion y a Goro; Liu Kang vence a Kitana (la
      hija adoptiva del emperador es descalificada), Sub-Zero, Reptile, y por
      último acaba con el propio hechicero en su fortaleza del Outworld.
      <br></br>
      <br></br>
      De este modo, los guerreros de la Tierra regresan a su hogar donde les
      espera una desagradable sorpresa: el emperador del Outworld, Shao Kahn, no
      está conforme con el resultado del torneo y decide arreglarlo a su modo,
      invadiendo la Tierra…
      <br></br>
      <br></br>
    </div>
  );
}

export default MK_1995;
