import  mysql      from 'mysql';
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'feb25'
});

function addUser(req,res){
    // console.log(req.body);

    connection.query('INSERT INTO users SET ?', req.body, function (error, results, fields) {
        if (error) {
            res.send({status:false , message:'Error In Insertion'});
        }
        else{
            res.send({status:true , message:'User Added successfully'});
        }
        // Neat!
    });
    
}
function showUser(req,res){
    connection.query('SELECT * FROM users',function (error, results, fields) {
        if (error) {
            res.send({status:false , message:'Error In Insertion' , data:null});
        }
        else{
            res.send({status:true , message:'success' , data:results});
        }
        // Neat!
    });
}
function deleteUser(req,res){

}
function updateUser(req,res){

}
export{ addUser,showUser,deleteUser,updateUser }