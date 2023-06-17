import { useSelector } from 'react-redux';
import ActivityCard from '../activityCard/activityCard';

const ActivitiesPage = () => {

    const allactivities = useSelector((state) => state.country.allActivities)
    console.log(allactivities)

    return (

        <div className='contenedor'>
            
            <h1>Activities Page</h1>
            
            {
                allactivities.map(({name, dificult, duration, season, countries}) => {

                    return(

                        <div>

                            <ActivityCard

                                name={name}
                                dificult={dificult}
                                duration={duration}
                                season={season}
                                countries={countries}

                            />

                        </div>
                    )
                })
            }

        </div>

    )

}

export default ActivitiesPage;