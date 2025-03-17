const Users=require('./user.mode')

const User={
    list: async (req, res)=>{
        const users = await Users.find()
        res.status(200).send(users)
    },
}

module.exports= User