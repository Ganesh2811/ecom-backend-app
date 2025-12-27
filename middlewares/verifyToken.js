import jwt  from 'jsonwebtoken';

const secretKey = '1f2c232a0e879f07e11fe11ddece5f46725cf22f109d23d03e41fd8310c5820b32137d18a993fa379552e2b3bfc05ed176b1a7e8967d9b3f3e58ff35c05cf8de2ec1c7e018e280950032f6a7a88065e0551d5bcfefe344b4f9e2720aa2904a4e20058d2b87569fbc46349faec84fa3b0313f77fd55f46028ec9bf38f456b0851f2c56dceb97ec6d7690a05c6763d0186c55db1ae30da79aa62bc0857e0d1846f7ef7e8fe1b0d056825b760bb45dea498daddb5dc3cb618af77ae2a8f51cd68ca4dde9f911b8b4720916f70fdb07478d9a3e3ec17f1cd57532abdc71a22da6d8c3042893f2213e4c868b428c193a22af1864e35cef3f1b1332eb6e6ce6e7fe6fc';

function verifyToken(req,res,next){
    const token = req.header('Authorization');
    // console.log("verify");
    // console.log(token);
    if (!token) return res.status(401).json({ error: 'Access denied',message:'failure'  , status:401 });
    
    try{
        const decoded = jwt.verify(token,secretKey);
        // console.log(decoded);
        res.json({ error: '' , message:'success' , status:200 });
    }
    catch(err){
        return res.status(401).json({ error: 'Token Expire',message:'failure',  status:401  });
    }   
}
export default verifyToken;