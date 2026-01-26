import vaultItem from "../Models/vaultItem.js";

async function handleGetData(req,res) {
    //based on userId and type
    //const vault = vaultItem.find({userId:})
    
    const {type, userId} = req.query;
    console.log("req body: ",type,userId)
    const vault = await vaultItem.find({
        userId: userId,
        type: type
    });
    console.log("Vault: ",vault)
    return res.json(vault)
}

async function handlePostData(req,res){
    await vaultItem.create({
        //userId: req.user._id,
        userId: req.body.userId,
        type: req.body.type,
        content: req.body.content,
        title: req.body.title
    })
    return res.json({message: "vault added"})
}

async function handlePatchVaultReq(req,res){//:id
    console.log("params: ",req.params)
    const _id = req.params;
    if(!req.body.title && !req.body.content) return res.status(404).json({error: "Time update is required."});

    await vaultItem.findByIdAndUpdate(
        _id,
        req.body,
        {new: true, overwrite:true}
    )
    
    return res.json({msg:"data passed"})
}

export {handleGetData,handlePostData,handlePatchVaultReq}