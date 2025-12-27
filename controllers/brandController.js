import brandModel from "../models/brandModel.js";

async function addBrand(req,res){
    // console.log(req.body);
    // res.send('add cat')
    try{
        const brandObj = new brandModel();
        brandObj.name = req.body.name;
        await brandObj.save();
        res.send({message:'Brand Added'});
    }
    catch(err){
        res.send({error:err.message});
    }
}
async function showBrand(req,res){
    try{
        var result = await brandModel.find();
        res.send({data: result});
    }
    catch(error){
        res.send({error:error.message});
    }
}

export {
    addBrand,
    showBrand
}