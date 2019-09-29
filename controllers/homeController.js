const mongoose = require('mongoose')
const Task = mongoose.model('Task')





const index = async (req, res) => {
    const tasks = await Task.find();

    res.render('home', { dados: tasks })
}


module.exports = {
    index

}