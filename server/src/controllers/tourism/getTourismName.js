const { Tourism } = require('../../db')
const { Op } = require('sequelize')

const getTourismName = async (req, res) => {
    const { name } = req.query

    try {
        
        const searchTourism = await Tourism.findAll({where: {name:{[Op.iLike]:`%${name}%`}}})

        if(!searchTourism.length){

            return res.status(404).json({ error:  'Non-existent tourism' })
            
        }


        return res.status(200).json(searchTourism)

    } catch (error) {

        res.status(400).json(error.message)

    }
}


module.exports = getTourismName