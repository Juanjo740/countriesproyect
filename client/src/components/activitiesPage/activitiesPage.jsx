import { useSelector } from 'react-redux';
import ActivityCard from '../activityCard/activityCard';
import style from './activitiesPage.module.css'

const ActivitiesPage = () => {

    const allactivities = useSelector((state) => state.country.allActivities)
    console.log(allactivities)

    return (

        <div className='contenedor'>

            <div className={style.contenedorActivities}>
            
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

        </div>

    )

}

export default ActivitiesPage;