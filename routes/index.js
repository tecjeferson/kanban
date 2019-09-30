const router = require('express').Router()
const homeController = require('../controllers/homeController')
const taskController = require('../controllers/taskController')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')



router.get('/', homeController.index)

router.get('/task/add', authMiddleware.isLogged, taskController.add)
router.post('/task/add', authMiddleware.isLogged, taskController.addAction)

router.get('/edit/:_id', authMiddleware.isLogged, taskController.edit)
router.post('/edit/:_id', authMiddleware.isLogged, taskController.editAction)

router.get('/delete/:_id', authMiddleware.isLogged, taskController.deleteOne)
router.post('/delete/:_id', authMiddleware.isLogged, taskController.deleteAction)

router.get('/users/logout', userController.logout)
router.get('/users/login', userController.login)
router.post('/users/login', userController.loginAction)

router.get('/users/register', userController.register)
router.post('/users/register', userController.registerAction)

module.exports = router