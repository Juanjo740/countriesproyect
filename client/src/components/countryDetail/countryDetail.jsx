import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux';
import { getCountryByID } from '../../redux/countrySlice';
import axios from 'axios';
import style from "./countryDetail.module.css"


const CountryDetail = () => {

    const { id } = useParams()
    const URL = 'http://localhost:3001/countries'
    const dispatch = useDispatch()

    useEffect(()=>{
        const getCountryId = async()=>{
            try {
                const {data} = await axios(`${URL}/${id}`)
                dispatch(getCountryByID(data))
            } catch (error) {
                throw error.message
            }
        }
        getCountryId()
    },[])
    
    let country = useSelector((state) => state.country.countryByID)
    
    return (
        
        <div className={style.contenedor}>

            <div className={style.contenedorDetail}>
                
                <h2 className={style.contenedorDetail__Titulo}>{`${country.name}`}</h2>
                <img className={style.contenedorDetail__Bandera} src={country.flags} alt={country.name} /><br/>
                <h3 className={style.contenedorDetail__Items}>{`Area: ${country.area} km²`}</h3>
                <h3 className={style.contenedorDetail__Items}>{`Population: ${country.population}`}</h3>
                <h3 className={style.contenedorDetail__Items}>{`Continent: ${country.continents}`}</h3>
                <h3 className={style.contenedorDetail__Items}>{`Sub Region: ${country.subregion}`}</h3>
                <h3 className={style.contenedorDetail__Items}>{`Capital: ${country.capital}`}</h3>
                
            </div>

        </div>
    )
}


export default CountryDetail