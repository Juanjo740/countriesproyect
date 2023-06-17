import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    allCountries: [],
    countries: [],
    countriesByName: [],
    countryByID: {},
    countriesForActivityOnly:[],
    allActivities: [],
    activities: [],
    activity: {},
    activitiesByName: []

}

export const countrySlice = createSlice({

    name: "country",
    initialState,

    reducers: {

        getCountries: (state, { payload } ) => {

            const data = payload

            state.allCountries = data
            state.countries = data
        },

        getCountryByID: (state, { payload } ) => {

            const data = payload

            state.countryByID = data

        },

        getCountryByName: (state, { payload } ) => {
            const data = payload

            state.countriesByName = data
            state.allCountries = data
        },

        filterByContinent: (state, { payload } ) => {
            const data = payload

            const countriesContinent = state.countries.filter(country => country.continents === data)
            
            state.allCountries = data === 'Todos' ? state.countries : countriesContinent
        },

        orderAlfabetic: (state, { payload } ) => {
            const data = payload

            const allCountriesCopy = [...state.allCountries]

            state.allCountries = data ==='A' ? allCountriesCopy.sort((a, b) => a.name.localeCompare(b.name)) : allCountriesCopy.sort((a, b) => b.name.localeCompare(a.name))
            
        },
        
        orderByPopulation: (state, { payload } ) => {
            const data = payload;

            const allCountriesCopy = [...state.allCountries]

            state.allCountries = data ==='A' ? allCountriesCopy.sort((a, b) => b.population - a.population) : allCountriesCopy.sort((a, b)=> a.population - b.population)
        },

        //------------------Activities-----------------------------

        getActivities: (state, { payload } ) => {

            const data = payload

            state.allActivities = data
            state.activities = data
        },

        getActivityByName: (state, { payload } ) => {
            const data = payload

            state.allActivities = data
            state.activitiesByName = data
        },

    }

})

export const { getCountries, getCountryByID, getCountryByName, filterByContinent, orderAlfabetic, orderByPopulation, getActivities, getActivityByName, postActivity } = countrySlice.actions;
export default countrySlice.reducer