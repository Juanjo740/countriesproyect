import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, getActivities } from './redux/countrySlice';

import LandingPage from './components/landingPage/landingPage'
import HomePage from './components/homePage/homePage'
import CountryDetail from './components/countryDetail/countryDetail';
import SideBar from './components/sideBar/sideBar';
import SearchBar from './components/searchBar/searchBar';
import FilterBar from './components/filterBar/filterBar';
import ActivitiesPage from './components/activitiesPage/activitiesPage';
import SearchBarActivities from './components/searchBarActivities/searchBarActivities';
import CreateActivity from './components/createActivity/createActivity';
import ErrorPage from './components/errorPage/errorPage';

function App() {

  const dispatch = useDispatch()
  const URLC = 'http://localhost:3001/countries'
  const URLA = 'http://localhost:3001/activities'
  const location = useLocation()

// useEffect que llama a los countries para que ya esten cargadas

  useEffect(() => {

    const getAllCountries = async () => {

      try {

        const response = await fetch(URLC);
        const data = await response.json();
        dispatch(getCountries(data));

      } catch (error) {
        
        throw error.message

      }
    }

    getAllCountries()

  }, [])

// useEffect que llama activities para que ya esten cargadas

  useEffect(() => {

    const getAllActivities = async () => {

      try {
        
        const response = await fetch(URLA);
        const data = await response.json();
        dispatch(getActivities(data));

      } catch (error) {
        
        throw error.message

      }

      getAllActivities()

    }

  }, [])

  return (
    
    <div className='App'>

      {
        location.pathname !== "/" ? <SideBar /> : null
      }

      {
        location.pathname === "/activities" ? <SearchBarActivities /> : null
      }

      <Routes>


        <Route path='/' element={ <LandingPage /> }></Route>
        <Route path='/home' element={ <HomePage /> }></Route>
        <Route path='/activities' element={ <ActivitiesPage />}></Route>
        <Route path='details/:id' element={ <CountryDetail /> }></Route>
        <Route path='/createActivity' element={<CreateActivity />}></Route>
        <Route path='*' element={<ErrorPage />}/>

      </Routes>

    </div>

  )
}

export default App
