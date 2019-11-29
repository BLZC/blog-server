/**
 * 用户管理
 */
const Music = require('../sqlConfig/model/music')

module.exports = {
    // 查询所有歌曲
    getAllMusic: async () => {
        return Music.findAll({
            attributes: ['id', 'title', 'artist', 'time', 'src', 'pic']
        })
    },
}


