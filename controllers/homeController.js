const mongoose = require('mongoose')
const Task = mongoose.model('Task')







const index = async (req, res) => {
    const tasks = await Task.find();
    const user = req.user
    res.render('home', {
        dados: tasks,
        user: user
    })
   
}



module.exports = {
    index

}