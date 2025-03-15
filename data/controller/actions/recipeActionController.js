const RecipeData = require('../models/Recipes');
const path = require("path");

const newRecipePage = async (req, res) => {
    res.render('newRecipe', {
        title: 'New Recipe'
    })
}

const storeRecipe = async (req, res) => {
    let image = req.files.image;
    await image.mv(path.resolve(__dirname, '..', '..', '..', 'src/public/uploads', image.name), async (error) => {
        await RecipeData.create({
            ...req.body,
            image: '/uploads/' + image.name
        })
        res.redirect('/recipes')
    })
}

const recipePage = async (req, res) => {
    const recipes = await RecipeData.find().populate('userid');
    res.render('recipes', {
        title: 'All Recipes',
        recipes
    })
}

const singleRecipePage = async (req, res) => {
    const recipe = await RecipeData.findById(req.params.id).populate('userid');
    res.render('singleRecipe', {
        title: recipe.title,
        recipe
    })
}

const deleteRecipe = async (req, res) => {
    await RecipeData.findByIdAndDelete(req.params.id);
    res.redirect('/recipes');
}

module.exports = {
    newRecipePage,
    storeRecipe,
    deleteRecipe,
    recipePage,
    singleRecipePage
}