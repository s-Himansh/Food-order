const mongoose = require('mongoose');
const url = '';


const connection = async () => {
    try {
        await mongoose.connect(url);

        console.log("Connected to the database");
        const foodItems = mongoose.connection.db.collection("food_items");
        const foodCategory = mongoose.connection.db.collection("food_category");

        const foodItemsData = await foodItems.find({}).toArray();
        const foodCategoryData = await foodCategory.find({}).toArray();

        if (foodItemsData.length > 0 && foodCategoryData.length > 0){
            global.food_items = foodItemsData;
            global.food_categories = foodCategoryData;

            // console.log("Food Items:", global.food_items);
            // console.log("Food Categories:", global.food_categories);
        }else {
            console.log("No data found in one or both collections");
        }




        // const fetched_data = await mongoose.connection.db.collection("food_items");
        // fetched_data.find({}).toArray(async(err, data) => {
        //     const food_category = await mongoose.connection.db.collection("food_category");
        //     food_category.find({}).toArray((err, catData) => {
        //         if (err){
        //             console.log(err.message);
        //         }else{
        //             global.food_items = data;
        //             global.food_categories = catData;
        //             console.log( global.food_items);
        //             console.log( global.food_categories);
        //         }
        //     })
        // });
        // if (food_data.length > 0) {
        //     const food_category = await mongoose.connection.db.collection("food_category");
        //     const category_data = await food_category.find({}).toArray();
        //     if (category_data.length > 0) {
        //         global.food_items = food_data;
        //         global.food_categories = food_category;
        //         console.log(global.food_items);
        //     } else {
        //         console.log("no data found");
        //     }
        //     // console.log(data);
        //     // global.food_items = data;
        //     // console.log(food_items);
        // }
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connection;
