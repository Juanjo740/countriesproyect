import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivityByName } from '../../redux/countrySlice'
import axios from 'axios';
import style from './searchBarActivities.module.css'

const SearchBarActivities = () => {
    
    const URL = 'http://localhost:3001/activities'
    const dispatch = useDispatch()
    const [ search, setSearch] = useState('')
    const [ error, setError] = useState('')

    const handleChange = (event) => {
        
        console.log(event.target.value)
        setSearch(event.target.value)
        validation()
    }
    
    const handleSearch = async (name) => {
        
        const { data } = await axios(`${URL}/name?name=${name}`)
        console.log(data)
        
        dispatch(getActivityByName(data))
        setSearch('')
    }
    
    const validation = () => {
        
        let errorValidation

        if(search.length > 0 && !isNaN(search)) {

            errorValidation = 'solo se aceptan palabras'
        }

        setError(errorValidation)
    }

    useEffect(() => {

        validation()   
    
    }, [search])

    return (
    
        <div className={style.contenedor}>

            <div className="contenedor">

                <div className={style.contenedorSearchBarActivities}>
                
                    <input placeholder="Buscar actividad" type="search" value={search} onChange={handleChange} />
                    <button onClick = {error ? null : () => handleSearch(search)}><svg width="30px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                    <div> {error ? <p>{error}</p> : null} </div>

                </div> 

            </div>

        </div>
    )
}

export default SearchBarActivities