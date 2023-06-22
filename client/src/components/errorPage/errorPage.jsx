import React from "react";
import './errorPage.css'
import style from './errorPage.module.css'

class ErrorPage extends React.Component {

    render() {

        return (

            <div className={style.fondoError}>

                
                <div className={style.errorTexto}>RUTA NO EXISTENTE</div>


            </div>
        )

    }
    
}

export default ErrorPage;


// const ErrorPage = () => {

//     return(

//         <div>


//         </div>

//     )
// }