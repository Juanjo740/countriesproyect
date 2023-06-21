import style from './activityCard.module.css'

const ActivityCard = ( {name, dificult, duration, season, countries} )=>{

    console.log(countries)

    return (

        <div className={style.contenedorActivityCard}>

            <h3>{`nombre: ${name}`}</h3>
            <h3>{`dificultad: ${dificult}`}</h3>
            <h3>{`duración: ${duration}`}</h3>
            <h3>{`temporada: ${season}`}</h3>
            
        </div>
    )
}

export default ActivityCard