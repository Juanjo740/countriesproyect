const { Country } = require('../../db');

const getCountriesById = async (req, res) => {


    const { id } = req.params;

    try {

        const country = await Country.findOne({ where: { id }});

        if (!country) {

        return res.status(404).json({ error: 'Non-existent country' });

        }

        return res.status(200).json(country);

    }   catch (error) {

        return res.status(500).json({ error: 'Server error' });

    }

};

module.exports = { getCountriesById }