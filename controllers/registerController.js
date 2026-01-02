import { encryptValue,checkHashValue } from "../middlewares/bcrypt.js";
import userModel from "../models/userModel.js"
import jwt  from 'jsonwebtoken';
var tokenTime = 3600;
const secretKey = '1f2c232a0e879f07e11fe11ddece5f46725cf22f109d23d03e41fd8310c5820b32137d18a993fa379552e2b3bfc05ed176b1a7e8967d9b3f3e58ff35c05cf8de2ec1c7e018e280950032f6a7a88065e0551d5bcfefe344b4f9e2720aa2904a4e20058d2b87569fbc46349faec84fa3b0313f77fd55f46028ec9bf38f456b0851f2c56dceb97ec6d7690a05c6763d0186c55db1ae30da79aa62bc0857e0d1846f7ef7e8fe1b0d056825b760bb45dea498daddb5dc3cb618af77ae2a8f51cd68ca4dde9f911b8b4720916f70fdb07478d9a3e3ec17f1cd57532abdc71a22da6d8c3042893f2213e4c868b428c193a22af1864e35cef3f1b1332eb6e6ce6e7fe6fc';

const registerAction = async function(req,res){
    console.log(req.body, "!!");
    
    var newPassword = encryptValue(req.body.password);
    console.log(newPassword, "new password");

    delete req.body.confirmpassword;
    req.body.password = newPassword;
    console.log(req.body, "upadted body");

    try{
        var userCount = await userModel.find({ email: req.body.email});
        console.log(userCount, "user count");
        
        if(userCount.length > 0){
            console.log("user found !!");
            
            res.send({message:'User Emaild In Use' , status:200})
        }
        else{
            var instance = new userModel(req.body);
            await instance.save();
            res.send({message:'User Registered' , status:200})
        }
    }
    catch(err){
        console.log(err, "!!");
        
        res.send({message:'Error In Database' , status:401})
    }
}

const loginAction = async function(req,res){
    console.log(req.body);

    // return;
    try{
        var emailCount = await userModel.find({email:req.body.email});
        // console.log(emailCount);

        // return;
        
        if(emailCount.length > 0){
            var dbPass = emailCount[0].password;
            var ansPassword = checkHashValue(req.body.password, dbPass);

            // console.log(ansPassword);
            // return;
            
            if(ansPassword){

                var payload = {
                    id:emailCount[0]['_id'],
                    name:emailCount[0]['name'],
                    mobile:emailCount[0]['mobile'],
                    email:emailCount[0]['email'],
                }
                
                var tokenValue = jwt.sign(payload, secretKey, { expiresIn: tokenTime });
                
                res.send({message:'Success' , status:200 , token:tokenValue});

            }
            else{
                res.send({message:'Password Invalid' , status:200})
            }
        }
        else{
            res.send({message:'EMailid Does Not Exist' , status:200})
        }
    }
    catch(err){
        res.send({message:'Error In Database' , status:401})
    }
   

}

export {  registerAction, loginAction }