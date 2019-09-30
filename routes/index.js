const router = require('express').Router()
const homeController = require('../controllers/homeController')
const taskController = require('../controllers/taskController')
const userController = require('../controllers/userController')



router.get('/', homeController.index)
router.get('/task/add', taskController.add)
router.post('/task/add', taskController.addAction)
router.get('/edit/:_id', taskController.edit)
router.post('/edit/:_id', taskController.editAction)
router.get('/delete/:_id', taskController.deleteOne)
router.post('/delete/:_id', taskController.deleteAction)

router.get('/users/logout', userController.logout)
router.get('/users/login', userController.login)
router.post('/users/login', userController.loginAction)
router.get('/users/register', userController.register)
router.post('/users/register', userController.registerAction)

module.exports = router