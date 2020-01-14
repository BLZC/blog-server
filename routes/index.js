
const apiuser = require('./modules/user');
const apimusic = require('./modules/music');
const apilabel = require('./modules/label');
const author = require('./modules/article');
const apiresource = require('./modules/resource');

module.exports = app => {
    app.use(apiuser.routes()),
    app.use(author.routes()),
    app.use(apimusic.routes()),
    app.use(apilabel.routes()),
    app.use(apiresource.routes())
}