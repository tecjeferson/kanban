module.exports.isLogged = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', `You don't have permission to access this page`)
        res.redirect('/users/login')
        return
    }
    next();
}