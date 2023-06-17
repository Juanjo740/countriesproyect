import { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../countryCard/countryCard'
import "./homePage.css"

const countriesPerPage = 12
const threshold = 2

const HomePage = () => {

    const allcountries = useSelector((state) => state.country.allCountries)

    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(allcountries.length / countriesPerPage)

    return (

        <div className='contenedor'>
            
            <button onClick={() => setPage(prev => --prev)}>Atras</button>

            <div>

                {
                    Array.from({ length: totalPages}).map((_, i) => {

                        if(i < page - threshold || i > page + threshold) return

                        return <button onClick={() => setPage(i)}>{i + 1}</button>

                    })
                }

            </div>

            <button onClick={() => setPage(prev => ++prev)}>Adelante</button>

            {
                allcountries.slice(countriesPerPage * page, (countriesPerPage * page) + countriesPerPage).map(({id, name, continents, capital, flags})=>{
                    return(
                        
                        <CountryCard
                            
                            id={id}
                            key={id+' '+name}
                            name={name}
                            continents={continents}
                            capital={capital}
                            flags={flags}
                        />
                        
                    )
                })
            }

        </div>

    )
}

export default HomePage;