import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities } from '../../redux/countrySlice';
import axios from "axios";
import style from "./createActivity.module.css"


const CreateActivity = () => {
    
    const URL = 'http://localhost:3001/activities'
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const countriesForActivityOnly = useSelector( (state) => state.country.countries)

    const [ error, setError] = useState({})   
    const [ activity, setActivity] = useState({

        name:'',
        duration:'',
        dificult:'',
        season:'',
        countries: []

    })

    const handleChange = (event) => {
        
        setActivity((prevState) => ({

            ...prevState,
            
            [event.target.name]:

                event.target.name === "countries"

                    ? prevState.countries.includes(event.target.value)

                        ? [...prevState.countries]

                        : [...prevState.countries, event.target.value]

                    : event.target.value,
          
            }));
        
        validation();

    }

    const handleClick = (event, id) => {
        
        event.preventDefault()

        setActivity({

            ...activity,

            countries: activity.countries.filter((country) => country !== id)
        
        })
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        if (Object.keys(error).length === 0) {

            try {
                
                console.log(activity)

                await axios.post(URL, activity);
                alert("Datos guardados exitosamente")

                setActivity({

                    name:'',
                    duration:'',
                    dificult:'',
                    season:'',
                    countries: []

                })

                navigate('/activities')

            } catch (error) {
                
                throw error.message

            }
        }
    }
    
    const validation = () => {
        
        let errorValidate = {}

        if(activity.name.length === 0 ){

            errorValidate.name = 'la actividad debe tener nombre'
        }

        if(activity.name.length > 0 && !isNaN(Number(activity.name))){

            errorValidate.name = 'el nombre debe contener solo caracteres'
        }

        if(isNaN(Number(activity.duration))){

            errorValidate.duration = 'la duracion debe ser un nombre'
        }

        if(Number(activity.duration) === 0){

            errorValidate.duration = 'la actividad no puede durar 0 horas'
        }

        setError(errorValidate)

    }

    useEffect(() => {

        validation()   
    
    }, [activity])

    return (
        
        <div className="contenedor">

            <form className={style.contenedorForm} onSubmit={handleSubmit}>

            

                    <label htmlFor="name">Nombre de la actividad</label>
                    <input required="" type="text" name="name" value={activity.name} onChange={handleChange} />
                    {error.name ? <p> {error.name} </p> : null}

                
                
                

                    <label>Horas de duracion</label>
                    <input required="" type="text" name="duration" value={activity.duration} onChange={handleChange} />
                    {error.duration ? <p> {error.duration} </p> : null}

                
               
                    
                    <select defaultValue="" name="dificult" onChange={handleChange}>

                        <option disabled value=""> Dificultades </option>
                        <option value="1">Muy facil</option>
                        <option value="2">Facil</option>
                        <option value="3">Mediana</option>
                        <option value="4">Dificil</option>
                        <option value="5">Extrema</option>

                    </select>

                
                
                

                    <select defaultValue="" name="season" onChange={handleChange}>

                        <option disabled value="">Temporadas</option>
                        <option value="Summer">Verano</option>
                        <option value="Fall">Otoño</option>
                        <option value="Winter">Invierno</option>
                        <option value="Spring">Primavera</option>

                    </select>

                

                    <span>Selecciona un pais</span>

                    <select name="countries" onChange={handleChange}>
                    
                    {
                        countriesForActivityOnly.map(({id, name})=>{
                            
                            return(
                                
                                <option value={id} key={id}> {name} </option>                            
                
                            )
                        })
                    }

                    </select>

                
                    
                    {activity.countries.length ? <span>Click para eliminar un pais:</span> : null}
                   
                    <div className={style.contenedorForm__Paises}>


                    {
                        activity.countries ? activity.countries.map((element)=> {
                            
                            return(
                                
                                <button onClick={(event) => handleClick(event, element)}>{element}</button>
                                
                                )
                                
                            }) : null
                        }

                    </div>
                

                    <button className={style.contenedorForm__Button}>CREAR</button>

                

            </form>
        </div>

    )

}

export default CreateActivity