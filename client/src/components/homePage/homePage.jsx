import { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../countryCard/countryCard'
import SearchBar from '../searchBar/searchBar';
import FilterBar from '../filterBar/filterBar';
import style from './HomePage.module.css'

const countriesPerPage = 12
const threshold = 2

const HomePage = () => {

    const allcountries = useSelector((state) => state.country.allCountries)

    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(allcountries.length / countriesPerPage)

    return (

        <div className='contenedor'>
           
            <div className={style.contenedor}>

                
                <SearchBar />
                <FilterBar />

                <div className={style.contenedorPaginado}>
                    
                    <button onClick={() => setPage(prev => --prev)}>Atras</button>


                        {
                            Array.from({ length: totalPages}).map((_, i) => {
                                
                                if(i < page - threshold || i > page + threshold) return
                                
                                return <button onClick={() => setPage(i)}>{i + 1}</button>
                                
                            })
                        }


                    <button onClick={() => setPage(prev => ++prev)}>Adelante</button>

                </div>

                <div className={style.contenedorCards}>

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

            </div>

        </div>
    
    )
}

export default HomePage;