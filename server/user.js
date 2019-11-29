
const { getAllUsers, getUserById } = require('../controllers/user')

module.exports = {
    getAllUsers: async ctx => {
        const users = await getAllUsers();
        // ctx.type = 'application/json';
        ctx.body = {
            code: 1,
            data: users
        }
    },

    Login: async ctx => {
        let options = ctx.request.body || {};
        let account = options.account || "";
        let password = options.password || "";
        let user = await getUserById(account, password);
        ctx.body = user
    }

}
