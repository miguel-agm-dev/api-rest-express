const Users=require('./user.mode')

const User={
    list: async (req, res)=>{
        const users = await Users.find()
        res.status(200).send(users)
    },

    create: async (req, res)=>{
        const user =new Users(req.body)
        const saveUser =await user.save()
        res.status(201).send(saveUser._id)
    },

    get: async (req, res)=>{
        const { id }=req.params
        const user=await Users.findOne({_id:id})
        res.status(200).send(user)
    },

    update: async (req, res)=>{
        const { id }=req.params
        const user=await Users.findOne({_id:id})
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },

    delete: async (req, res)=>{
        const { id }=req.params
        const user=await Users.findOne({_id:id})
        if(user){
            user.deleteOne()
        }
        res.sendStatus(204)
    },
}

module.exports= User