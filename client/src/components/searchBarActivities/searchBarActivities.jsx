import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivityByName } from '../../redux/countrySlice'
import axios from 'axios';

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
    
            <div className="contenedor">
                
                <input placeholder="Buscar actividad" type="search" value={search} onChange={handleChange} />
                <button onClick = {error ? null : () => handleSearch(search)}>🔎</button>
                <div> {error ? <p>{error}</p> : null} </div>

            </div>
    )
}

export default SearchBarActivities