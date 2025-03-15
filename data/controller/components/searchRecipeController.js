const RecipeSearch = require('../models/Recipes');

module.exports = async (req, res) => {
    // const programs = await ProgramPost.find({ProgramPost : req.body.query}).sort({_id: -1}).populate('userid')
    // const events = await ProgramResults.find({ProgramResults : req.body.query}).limit(8).sort({_id: -1}).populate('userid');
    try {
        let searchTerm = req.body.searchTerm;
        const recipes = await RecipeSearch.find({ $text: { $search: searchTerm, $caseSensitive:false, $diacriticSensitive: true } }).sort({_id: -1}).populate('userid');
        res.render("search", {
            title: "Search results from your query",
            recipes
        })
    } catch (error) {
        res.status(500).send({message: error.message || 'Error Occured'})
    }
}