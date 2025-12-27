import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
const encryptValue = function(textData){
    var hash = bcrypt.hashSync(textData, salt);
    return hash;
}
const checkHashValue = function(textData,hash){
    return bcrypt.compareSync(textData, hash); // true
}

export{
    encryptValue,
    checkHashValue
}