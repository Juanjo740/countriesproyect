const { Router } = require("express");
const { getCountries } = require('../controllers/country/getCountries')
const { getCountriesById } = require('../controllers/country/getCountriesById')
const getCountryName = require('../controllers/country/getCountryName')

const { getTourism } = require('../controllers/tourism/getTourism')
const getTourismName = require('../controllers/tourism/getTourismName')
const { postTourism } = require('../controllers/tourism/postTourism')

const router = Router();

router.get('/countries', getCountries)
router.get('/countries/name', getCountryName)

router.get('/activities', getTourism)
router.get('/activities/name', getTourismName)
router.post('/activities', postTourism)

router.get('/countries/:id', getCountriesById)


module.exports = router;
