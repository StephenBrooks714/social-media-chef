

const homePage = (req, res) => {
    res.render('index', {
        title: 'Demo Home Page'
    })
}

const docsPage = (req, res) => {
    res.render('docs', {
        title: 'Demo Docs'
    })
}

const registerPage = (req, res) => {
    var username = ""
    var password = ""
    const data = req.flash('data')[0]

    if(typeof data!="undefined"){
        username = data.username
        password = data.password
    }

    res.render('register',{
        title: 'Register',
        //errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        username: username,
        password: password
    })
}

const loginPage = (req, res) => {
    res.render('login', {
        title: 'Demo Login'
    })
}

/////////////////////////////////////////////////
// action pages

const actionPage = (req, res) => {
    res.render("actions",{
        title: "Actions"
    })
}

module.exports = {
    homePage,
    docsPage,
    registerPage,
    loginPage,
    actionPage
}