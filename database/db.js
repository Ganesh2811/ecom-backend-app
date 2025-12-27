import mongoose from 'mongoose';

async function dbConnection(){
    // await mongoose.connect('mongodb://127.0.0.1/eshopperdatabase');
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.wqtic.mongodb.net/dhavalnode');
    // mongodb+srv://admin:<db_password>@cluster0.wqtic.mongodb.net/
}

export default dbConnection;