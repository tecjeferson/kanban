const mongoose = require('mongoose')
const Task = mongoose.model('Task')

const add = (req, res) => {
    res.render('taskAdd')
}

const addAction = async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
    } catch (error) {
        req.flash('error', 'You have to input data. Erro: ' + error.message)
        return res.redirect('/task/add')
    }
    req.flash('success', 'Task saved successfully!')
    res.redirect('/')
}

const edit = async (req, res) => {
    //Pegar as informações
    const task = await Task.findOne({ _id: req.params._id })
    //Carregar o formulário de edição
    res.render('edit', { dados: task })
}

const editAction = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            {
                new: true,
                runValidators: true
            })
        req.flash('success', `Task edited ${req.params._id} successfully!`)
    } catch (error) {
        req.flash('error', error + `. Cannot save ${req.params._id}`)

    }
    res.redirect('/')
}

const deleteOne = async (req, res) => {
    const task = await Task.findOne({ _id: req.params._id })

    res.render('delete', { dados: task })
}

const deleteAction = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params._id })
        req.flash('success', `Task ${req.params._id} Deleted  successfully!`)

    } catch (error) {
        req.flash('error', error + `. Cannot delete ${req.params._id}`)
    }

    res.redirect('/')

}


module.exports = {
    add,
    addAction,
    edit,
    editAction,
    deleteOne,
    deleteAction
}