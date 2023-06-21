import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByContinent, orderAlfabetic, orderByPopulation } from '../../redux/countrySlice'
import style from "./filterBar.module.css"

const FilterBar = () => {

    const dispatch = useDispatch()

    const handleFilterByContinent = (event) => {

        dispatch(filterByContinent(event.target.value))
    
    }

    const handleOrderAlfabetic = (event) => {

        dispatch(orderAlfabetic(event.target.value))
    
    }
    
    const handleOrderByPopulation = (event) => {

        dispatch(orderByPopulation(event.target.value))

    }
    


    return(

        <div className={style.contenedorFilterBar}>
        
            <div>
            
                <select name="alphabetical" onChange={handleOrderAlfabetic}>

                    <option value="A">De la A a la Z</option>
                    <option value="Z">De la Z a la A</option>
                
                </select>
            
            </div>

            <div>
            
                <select name= "population" onChange={handleOrderByPopulation}>

                    <option value="A">Mayor a Menor</option>
                    <option value="D">Menor a Mayor</option>

                </select>
            
            </div>

             <div>
                
                <select name= "continents" onChange={handleFilterByContinent}>

                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">Sur America</option>
                    <option value="North America">Norte America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Todos">Todos</option>

                </select>

            </div>

        </div>

    )

}

export default FilterBar