import mongoose from 'mongoose';

async function dbConnection(){
    // await mongoose.connect('mongodb://127.0.0.1/eshopperdatabase');
    await mongoose.connect('mongodb://myappuser:pass%40123@13.223.225.253:27017/myAppDB');
    // mongodb+srv://admin:<db_password>@cluster0.wqtic.mongodb.net/
}

export default dbConnection;