import categoryModel from "../models/categoryModel.js";

async function addCategory(req,res){
    // console.log(req.body);
    // res.send('add cat')
    try{
        const categoryObj = new categoryModel();
        categoryObj.name = req.body.name;
        await categoryObj.save();
        res.send({message:'Category Added'});
    }
    catch(err){
        res.send({error:err.message});
    }
}
async function showCategory(req,res){
    try{
        var result = await categoryModel.find();
        res.send({data: result});
    }
    catch(error){
        res.send({error:error.message});
    }
}

export {
    addCategory,
    showCategory
}