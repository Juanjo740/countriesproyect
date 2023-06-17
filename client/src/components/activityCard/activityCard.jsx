const ActivityCard = ( {name, dificult, duration, season, countries} )=>{

    return (

        <div>

            <h3>{`${name}`}</h3>
            <h3>{`${dificult}`}</h3>
            <h3>{`${duration}`}</h3>
            <h3>{`${season}`}</h3>
            <h3>{`${countries}`}</h3>

        </div>
    )
}

export default ActivityCard