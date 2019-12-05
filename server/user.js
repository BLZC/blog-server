const {public_key , prikey} = require('../util/generatorRsakey.js');
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
    // 获取公钥
    getPubKey: async ctx => {
        ctx.body = {
            key: public_key
        }
    },
    Login: async ctx => {
        let options = ctx.request.body || {},
            account = options.account || "",
            password = options.password || "";
        //解密
        let _pwd = JSON.parse(prikey.decrypt(password, 'utf8'));
        let user = await getUserById(account, _pwd);
        ctx.body = user
    }

}
