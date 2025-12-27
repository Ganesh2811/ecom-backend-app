
import multer from 'multer';
import productModel from '../models/productModel.js';

var uniqueName =  Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, uniqueName + file.originalname)
    }
  })
  
const upload = multer({ storage: storage }).single('filepath');

function addProduct(req,res){
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          console.log(err);
          
        } else if (err) {
          // An unknown error occurred when uploading.
          console.log(err);
          
        }
        
        console.log(req.file);
        console.log(req.body);

        req.body.filepath = req.file.filename;

        try{
          var instance = new productModel(req.body);
          await instance.save();
          res.send({message:'Product Added successfully'});

        }
        catch(err){
          res.send({message:'Error in File Upload'});

        }
        
        // Everything went fine.
      })
}


async function getProduct(req,res){
  try{
    var result = await productModel.find();
    res.send({data: result});
}
catch(error){
    res.send({error:error.message});
}
}
async function getProductById(req,res){
  try{
    var result = await productModel.findById(req.params.id);
    res.send({data: result});
}
catch(error){
    res.send({error:error.message});
}
}

async function getProductByCategoryId(req,res){
  try{
    var result = await productModel.find({categoryid:req.params.id});
    res.send({data: result});
}
catch(error){
    res.send({error:error.message});
}
}


export {
    addProduct,
    getProduct,
    getProductById,
    getProductByCategoryId
}