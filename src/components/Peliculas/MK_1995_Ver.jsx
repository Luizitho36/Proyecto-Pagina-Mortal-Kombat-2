import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

function MK_1995_Ver() {
  return (
    <div>
      <ReactPlayer
        className="videoMK"
        url={[
          "https://www.facebook.com/100004076139187/videos/pcb.3108180582661116/209531464959771?__cft__[0]=AZWFa04zmuYCrGJjDy_BO8kpt22CHuXdHN6ZItZSjK4K5Efe5RlVeOe2KdCsLFq0A4PHJh6LcIt2eI8qRhna61r0vFiyOYSjnWjnUbBC7ACJ81820VTvfRRBAwMO6b8sJB0lTqGopqk4VTxGnChl_nC42YKDmkcPBasEdGu2GgZGEQ&__tn__=*bH-R",
        ]}
      />
      <br></br>

      <p className="enlace">(parte 1)</p>

      <ReactPlayer
        className="videoMK"
        url={["https://www.youtube.com/watch?v=1Bls4UAP2_k"]}
      />
      <br></br>

      <p className="enlace">(parte 2)</p>

      <ReactPlayer
        className="videoMK"
        url={["https://www.youtube.com/watch?v=Uiae19a0GFQ"]}
      />
      <br></br>

      <p className="enlace">(parte 3)</p>

      <ReactPlayer
        className="videoMK"
        url={[
          "https://www.facebook.com/100004076139187/videos/pcb.3108180582661116/211574088071490?__cft__[0]=AZWFa04zmuYCrGJjDy_BO8kpt22CHuXdHN6ZItZSjK4K5Efe5RlVeOe2KdCsLFq0A4PHJh6LcIt2eI8qRhna61r0vFiyOYSjnWjnUbBC7ACJ81820VTvfRRBAwMO6b8sJB0lTqGopqk4VTxGnChl_nC42YKDmkcPBasEdGu2GgZGEQ&__tn__=*bH-R",
        ]}
      />
      <br></br>

      <p className="enlace">(parte 4)</p>

      <ReactPlayer
        className="videoMK"
        url={["https://www.youtube.com/watch?v=LBXj8f__4do"]}
      />
      <br></br>

      <p className="enlace">(parte 5)</p>
      <br></br>
      <NavLink
        to="https://www.facebook.com/100004076139187/videos/pcb.3108180582661116/6139914439421959?__cft__[0]=AZWFa04zmuYCrGJjDy_BO8kpt22CHuXdHN6ZItZSjK4K5Efe5RlVeOe2KdCsLFq0A4PHJh6LcIt2eI8qRhna61r0vFiyOYSjnWjnUbBC7ACJ81820VTvfRRBAwMO6b8sJB0lTqGopqk4VTxGnChl_nC42YKDmkcPBasEdGu2GgZGEQ&__tn__=*bH-R"
        target="_blank"
      >
        <p className="enlace">¡click aquí! (parte 6)</p>
      </NavLink>
      <br></br>
      <NavLink
        to="https://www.facebook.com/100004076139187/videos/pcb.3108180582661116/1413986049343297?__cft__[0]=AZWFa04zmuYCrGJjDy_BO8kpt22CHuXdHN6ZItZSjK4K5Efe5RlVeOe2KdCsLFq0A4PHJh6LcIt2eI8qRhna61r0vFiyOYSjnWjnUbBC7ACJ81820VTvfRRBAwMO6b8sJB0lTqGopqk4VTxGnChl_nC42YKDmkcPBasEdGu2GgZGEQ&__tn__=*bH-R"
        target="_blank"
      >
        <p className="enlace">¡click aquí! (parte 7)</p>
      </NavLink>
    </div>
  );
}

export default MK_1995_Ver;
