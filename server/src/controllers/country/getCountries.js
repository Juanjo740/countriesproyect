const axios = require('axios');
const { Country } = require('../../db.js');
const URL = 'http://localhost:5000/countries'

const getCountries = async (req, res) => {

    try {

        const { data } = await axios(URL)

        let countries = await Promise.all(

            data.map(async (element) => {

                const country = {
                    
                    id: element.cca3,
                    name: element.name.common,
                    flags: element.flags.png,
                    capital: element.capital ? element.capital[0]: 'No Data',
                    continents: element.continents[0],
                    population: element.population,
                    subregion: element.subregion,
                    area: element.area ? element.area : 'No Data'
                }
    
                Country.findOrCreate({
                   
                    where:{

                        id: element.cca3,
                    },

                    defaults: {
                        
                        name: element.name.common,
                        flags: element.flags.png,
                        capital: element.capital ? element.capital[0]: 'No Data',
                        continents: element.continents[0],
                        population: element.population,
                        subregion: element.subregion? element.subregion:'No Data',
                        area: element.area ? element.area : 'No Data'
                    }

                })

                return country

            })
        )             
        
        return res.status(200).json(countries) 

    }   catch (error) {

        return res.status(404).send(error)
    
    }
}

module.exports = { getCountries }