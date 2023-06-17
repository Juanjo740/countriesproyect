const { Country } = require('../../db')
const { Op } = require('sequelize')

const getCountryName = async (req, res) => {
    const { name } = req.query

    try {
        
        const searchCountry = await Country.findAll({where: {name:{[Op.iLike]:`%${name}%`}}})

        if(!searchCountry.length){
            return res.status(404).json({ error:  'Non-existent country' })
        }


        return res.status(200).json(searchCountry)

    } catch (error) {
        res.status(400).json(error.message)

    }
}


module.exports = getCountryName