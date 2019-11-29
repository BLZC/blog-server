/**
 * 用户管理
 */
const { sign } = require('jsonwebtoken')
const secret = 'blog'
const User = require('../sqlConfig/model/user')
const { Len } = require('../util/api')

module.exports = {
    // 查询所有用户
    getAllUsers: async () => {
        return User.findAll({
            attributes: ['id', 'username', 'account', 'password']
        })
    },
    // 根据id查找某个用户
    getUserById: async (account, password) => {
        let result = {}, hasUser, isOk;
        await User.findAll({
            where: {
                account: account
            }
        }).then(res => {
            hasUser = res;   
        })
        await User.findAll({
            where: {
                account: account,
                password: password
            }
        }).then(res => {
            isOk = res;
        })
        if (Len(isOk)) {
            const token = sign({account}, secret, {expiresIn: '1h'})
            result = {
                code: 1,
                message: '账号密码正确',
                data: isOk[0],
                token
            }
        } else if (Len(hasUser)) {
            result = {
                code: 2,
                message: '密码错误'
            }
        } else {
            result = {
                code: 0,
                message: '不存在此用户'
            }
        }
        return result;
    } 
}


