const mongoose = require("mongoose");
const Schema = mongoose.Schema

const RecipeSchema = new Schema ({
    title: String,
    userid: String,
    image: String,
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert']
    },
    ingredients: String,
    directions: String,
    directions2: {
        type: String,
        required: false
    },
    directions3: {
        type: String,
        required: false
    },
    prepTime: String,
    servings: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})
RecipeSchema.index({ title: "text" });
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;