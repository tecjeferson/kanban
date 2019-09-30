const User = require('../models/User')

const login = (req, res) => {
    res.render('./users/login')
}
const loginAction = (req, res) => {
    const auth = User.authenticate()
    auth(req.body.email, req.body.password, (error, result) => {
        if (!result) {
            req.flash('error', 'Wrong Email/Password')
            res.redirect('/users/login')
            return
        }

        req.login(result, () => { })


        req.flash('success', 'You are logged in')
        res.redirect('/')

    })

}

const logout = (req, res) => {
    req.logout();
    res.redirect('/')
}


const register = (req, res) => {
    res.render('./users/register')
}

const registerAction = (req, res) => {
    const newUser = new User(req.body)
    User.register(newUser, req.body.password, (error) => {
        if (error) {
            req.flash('error', 'Error, please try again later' + error)
            res.redirect('/users/register')
            return
        }

        req.flash('success', 'Register created, now you can Login!')
        res.redirect('/')
    })
}

module.exports = {
    login,
    loginAction,
    register,
    registerAction,
    logout

}