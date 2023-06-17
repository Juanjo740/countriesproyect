import { NavLink } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux';
import './sideBar.css'
import logocasa from "../../img/casa.png"

const SideBar = () => {

    return(

        <nav className="contenedorSideBar">

            <div className="contenedorSideBarTop">

                <NavLink className="contenedorSideBarTop__contenedorIcons" to='home'><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="1.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M10 18v-3a2 2 0 012-2v0a2 2 0 012 2v3M2 8l9.732-4.866a.6.6 0 01.536 0L22 8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>

                <NavLink className="contenedorSideBarTop__contenedorIcons" to='activities'><svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M5 19a4 4 0 100-8 4 4 0 000 8zM8.5 7.5h6M19 15l-4-7.5h-.5m0 0l2-3m0 0H14m2.5 0h2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 15l3.5-7.5L12 14h3M8.5 7.5c-.333-1-1.5-3-3.5-3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 19a4 4 0 100-8 4 4 0 000 8z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>

                <NavLink className="contenedorSideBarTop__contenedorIcons" to='createActivity'><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="1.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M10.634 11.056L2.148 19.54l2.122 2.121 8.485-8.485" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.634 11.056l1.414-1.415s.354-3.182-3.182-6.717l1.06-1.06 8.486 5.656-1.06 1.06 1.413 1.415 1.061-1.06 2.475 2.474-4.95 4.95-2.475-2.475 1.061-1.06-1.414-1.415-1.768 1.768-2.121-2.121z" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>

                <NavLink className="contenedorSideBarTop__contenedorIcons" to='myActivities'><svg width="40px" height="40px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>

            </div>

            <div className="contenedorSideBarBottom">

                <NavLink className="contenedorSideBarBottom__contenedorIcons" to='logIn'><svg width="40px" height="40px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M19 12h-7m0 0l3 3m-3-3l3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>

                <NavLink className="contenedorSideBarBottom__contenedorIcons" to='about'><svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="1.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 20v-1a7 7 0 0110-6.326M16.635 16.415l1.039-2.203a.357.357 0 01.652 0l1.04 2.203 2.323.356c.298.045.416.429.2.649l-1.68 1.713.396 2.421c.051.311-.26.548-.527.401L18 20.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422-1.68-1.713c-.216-.22-.098-.604.2-.65l2.324-.355z" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>

            </div>
        
        </nav>

    )

}

export default SideBar