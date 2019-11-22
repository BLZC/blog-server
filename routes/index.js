
const user = require('./modules/user');
const author = require('./modules/article')
const category = require('./modules/category')
module.exports = app => {
    app.use(user.routes())
    app.use(author.routes())
    app.use(category.routes())
}

