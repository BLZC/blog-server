
const apiuser = require('./modules/user');
const author = require('./modules/article')
const apiCategory = require('./modules/category')
module.exports = app => {
    app.use(apiuser.routes())
    app.use(author.routes())
    app.use(apiCategory.routes())
}

