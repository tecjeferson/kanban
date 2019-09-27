const router = require('express').Router()
const homeController = require('../controllers/homeController')



router.get('/', homeController.index)
router.get('/details', homeController.userMiddleware, homeController.details)

module.exports = router