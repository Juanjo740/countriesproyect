import style from './activityCard.module.css'

const ActivityCard = ( {name, dificult, duration, season, Countries} )=>{

    return (

        <div className={style.contenedorActivityCard}>

            <h3>{`nombre: ${name}`}</h3>
            <h3>{`dificultad: ${dificult}`}</h3>
            <h3>{`duración: ${duration}`}</h3>
            <h3>{`temporada: ${season}`}</h3>
            {
                Countries.map(country => {

                    return <h3>{`${country.name}`}</h3>

                })
            }

        </div>
    )
}

export default ActivityCard