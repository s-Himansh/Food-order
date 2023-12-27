const mongoose = require('mongoose');
const url = 'mongodb+srv://sneilhhh:5XQXEwnOBFX7WiyQ@cluster0.foa5oyg.mongodb.net/Tomax?retryWrites=true&w=majority';


const connection = async () => {
    try {
        await mongoose.connect(url);

        console.log("Connected to the database");

        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        if (data){
            // console.log(data);
        }else{
            console.log("no data found");
        }
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connection;