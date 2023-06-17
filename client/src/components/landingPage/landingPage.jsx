import { NavLink } from "react-router-dom"
import "./landingPage.css"

const LandingPage = () => {

    return (

        <div className="fondoLanding">

            <div className="contenedorComenzar">

                <NavLink className="contenedorText" to='home'> COMENZAR </NavLink>

            </div>

        </div>
    )

}

export default LandingPage;