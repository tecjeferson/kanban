const router = require('express').Router()
const homeController = require('../controllers/homeController')
const taskController = require('../controllers/taskController')



router.get('/', homeController.index)
router.get('/details', homeController.userMiddleware, homeController.details)
router.get('/task/add', taskController.add)
//router.post('/task/add', postController.addAction)

module.exports = router