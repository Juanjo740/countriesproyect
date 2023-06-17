import { NavLink } from "react-router-dom"

const CountryCard = ( {id, name, flags, continents, capital} )=>{

    return (

        <div>

            <NavLink to={`/details/${id}`}> <header> {`${name}`} </header> </NavLink>

            <div>

                <img src={flags} alt={`Flag of ${name}`}/>

            </div>

            <section>

                <h3>{`${continents}`}</h3>
                <h3>{`${capital}`}</h3>

            </section>


        </div>
    )
}

export default CountryCard