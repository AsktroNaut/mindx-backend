const express = require('express')
const userRouter = express.Router()

const users = [
    { id: 1, name: 'Nguyen Tuan Anh1' },
    { id: 2, name: 'Nguyen Tuan Anh2'},
    { id: 3, name: 'Nguyen Tuan Anh3'}
]

userRouter.get('/', (req, res) => {
    res.send(users)
})

userRouter.post('/', (req, res) => {
    const newUser = {
        id: Number(Date.now()),
        name: req.body.name
    }
    users.push(newUser)
    res.send(users)

})


userRouter.put('/', (req, res) => {
    const userChanged = {
        id: req.body.id,
        name: req.body.name
    }
    users.map(user => {
        if (user.id == userChanged.id) {
            return user.name = userChanged.name
        }
    })
    res.send(users)
    
})

userRouter.delete('/', (req, res) => {
    const userDeleted = {
        id : req.body.id,

    }
    console.log(userDeleted);
    let newUserList = users.filter(user => user.id !== userDeleted.id)
    res.send(newUserList)

})
module.exports = userRouter