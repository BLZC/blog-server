
const { getAllUsers, getUserById } = require('../controllers/user')

module.exports = {
    getAllUsers: async ctx => {
        const users = await getAllUsers();
        // ctx.type = 'application/json';
        ctx.body = {
            status: 0,
            data: users
        }
    },

    Login: async ctx => {
        let options = ctx.request.body || {};
        let account = options.account || "";
        let password = options.password || "";
        let user = await getUserById(account, password);
        console.log(user)
            ctx.body = user
    }

}
