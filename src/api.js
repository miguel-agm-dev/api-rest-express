const express= require('express')
const mongoose= require('mongoose')

const app= express()

const port=3000

mongoose.connect('mongodb+srv://miguelagmdev:miguelagmdev@myapp.s5jqc.mongodb.net/api-db?retryWrites=true&w=majority&appName=MyApp')

const Users= mongoose.model('User', {
    name: String,
    lastname: String,
})

app.get('/api/', async(req,res)=>{
    const users = await Users.find()
    res.status(200)
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`El ejemplo se esta ejecutando en el puerto ${port}`)
    console.log('Run in: http://localhost:3000/api')
})