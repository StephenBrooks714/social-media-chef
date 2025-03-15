const express = require("express");
const router = express.Router();

const mainController = require(".././controller/pages/mainPages");
router.get("/", mainController.homePage);
router.get("/docs", mainController.docsPage);
router.get("/register", mainController.registerPage);
router.get("/login", mainController.loginPage);
router.get("/actions", mainController.actionPage);

const userDataController = require(".././controller/actions/userFormActions");
router.post("/store/user", userDataController.registerUser);
router.post("/login/user", userDataController.loginUser);
router.get("/logout/user", userDataController.logoutUser);

const recipeMainController = require(".././controller/actions/recipeActionController");
router.get("/recipes", recipeMainController.recipePage);
router.get("/newRecipe", recipeMainController.newRecipePage);
router.post("/store/recipe", recipeMainController.storeRecipe);
router.get("/singleRecipe/:id", recipeMainController.singleRecipePage);
router.get("/delete/recipe/:id", recipeMainController.deleteRecipe);

const recipeActionController = require(".././controller/actions/recipeActionController");

const searchResultController = require(".././controller/components/searchRecipeController");
router.post("/search", searchResultController);

module.exports = router;