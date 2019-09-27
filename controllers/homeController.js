const dados = [
    {
        'id': 1,
        'when': 'today',
        'TaskName': 'Select some laptop and test. Deploy laptops for new joiners',
        'Priority': 3
    },
    {
        'id': 2,
        'when': 'today',
        'TaskName': 'Check emails and request the laptop Yuliet',
        'Priority': 2
    },
    {
        'id': 3,
        'when': 'today',
        'TaskName': 'Close some tickets - try to reduce more than daily',
        'Priority': 1
    }]
const userMiddleware = (req, res, next) => {
    let info = { name: 'Jeferson', id: 123 }
    req.userInfo = info;
    console.log(info)
    next();
}


const index = (req, res) => {
    res.render('home', { dados: dados })
}

const details = (req, res) => {
    const obj = {
        pageTitle: 'details',
        userInfo: req.userInfo
    }
    console.log(obj)
    res.render('details', obj)
}

module.exports = {
    index,
    details,
    userMiddleware
}