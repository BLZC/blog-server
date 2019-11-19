
module.exports = app => {
    app.use(require('./modules/user').routes())
    app.use(require('./modules/article').routes())
    app.use(require('./modules/category').routes())
}

