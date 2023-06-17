const { Tourism, Country } = require('../../db')

const postTourism = async (req, res) => {
    
    try {
        
        const { name, dificult, duration, season, countries } = req.body
        

        if(!name || !dificult || !duration || !season || !countries)
            throw new Error('All properties must be specified')
        
        console.log(name, dificult, duration, season, countries)

        const [activities, created] = await Tourism.findOrCreate({

            where: { 

                name,
                dificult,
                duration,
                season

            },
   
        })
        
        if(created) {

            await activities.addCountries(countries)
            res.status(200).send('Esta creado')
        
        } else {

            res.status(404).send('Ya existe')
        }

        // return res.status(200).json(activities)

    } catch (error) {
        
        res.status(404).send(error.message)
        
    }

}

module.exports = { postTourism }