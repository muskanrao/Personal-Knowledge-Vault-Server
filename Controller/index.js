import vaultItem from "../Models/vaultItem.js";

async function handleGetData(req,res) {
    //based on userId and type
    //const vault = vaultItem.find({userId:})
    const vault = vaultItem.findById({
        userId: req.user._id,
        type: req.body.type
    });
    console.log("Vault: ",vault)
    return res.json(vault)
}

async function handlePostData(req,res){
    await vaultItem.create({
        userId: req.user._id,
        type: req.body.type,
        content: req.body.content,
        title: req.body.title
    })
    return res.json({message: "vault added"})
}

async function handlePatchVaultReq(req,res){
    
    return res.json({msg:"pending"})
}

export {handleGetData,handlePostData}