const { Tourism, Country } = require('../../db')

const getTourism = async (req, res) => {

    try {
        
        const activities = await Tourism.findAll({

            include: {

                model: Country,
                atributes: ["id", "name"],
                through: { atributes: []}
                
            }

        })

        if(activities) res.status(200).json(activities)

    } catch (error) {
        
        return res.status(404).send(error.message)

    }

}

module.exports = { getTourism }