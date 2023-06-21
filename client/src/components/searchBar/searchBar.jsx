import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from '../../redux/countrySlice'
import axios from 'axios';
import style from './searchBar.module.css'

const SearchBar = () => {
    
    const URL = 'http://localhost:3001/countries'
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
        
        dispatch(getCountryByName(data))
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
    
            <div className={style.contenedorSearchBar}>
                
                <input placeholder="Buscar pais" type="search" value={search} onChange={handleChange} />
                <button onClick = {error ? null : () => handleSearch(search)}>🔎</button>
                <div> {error ? <p>{error}</p> : null} </div>

            </div>
    )
}

export default SearchBar