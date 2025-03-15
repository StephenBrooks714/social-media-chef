const UsersData = require("../models/Users");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    await UsersData.create(req.body, (error, user) =>{
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            return res.redirect('/register')
        }
        res.redirect('/login')
    })
};

const loginUser = async (req, res) => {
    const { username,password } = req.body

    UsersData.findOne({username: username},function(error,user){
        if(user){
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same){
                    req.session.userId = user._id
                    res.redirect('/')
                }
                else{
                    res.redirect('/login')
                }
            })
        }
        else{
            console.log("/::",user)
            res.redirect('/login')
        }
    })
};

const logoutUser = async (req, res) => {
    req.session.destroy()
    res.redirect('/')
};

module.exports = { registerUser, loginUser, logoutUser };