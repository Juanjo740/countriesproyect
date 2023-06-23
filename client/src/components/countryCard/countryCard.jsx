import { NavLink } from "react-router-dom"
import style from "./countryCard.module.css"

const CountryCard = ( {id, name, flags, continents, population} )=>{

    return (

        <div className={style.contenedorCard}>

            <NavLink to={`/details/${id}`}> <header> {`${name}`} </header> </NavLink>

            <img src={flags} alt={`Flag of ${name}`}/>
        
            

                <h3>{`${continents}`}</h3>
                <h3>{`${population}`}</h3>


        </div>
    )
}

export default CountryCard