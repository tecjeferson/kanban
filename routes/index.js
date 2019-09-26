const router = require('express').Router()

const dados = [
    {
        'id': 1,
        'when':'today',
        'TaskName':'Deploy laptops for new joiners',
        'Priority':3
    },
    {
        'id': 2,
        'when':'today',
        'TaskName':'Laptop Yuliet',
        'Priority':2
    },
    {
        'id': 3,
        'when':'today',
        'TaskName':'Close some tickets',
        'Priority':1
    }]

router.get('/', (req, res)=>{
    res.render('home', {dados: dados})
})

router.get('/details', (req, res)=>{
    res.send('Details')
})

module.exports = router