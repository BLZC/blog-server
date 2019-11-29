
const { getAllMusic } = require('../controllers/music')

module.exports = {
    getAllMusic: async ctx => {
        const music = await getAllMusic();
        ctx.body = {
            code: 1,
            data: music
        }
    }
}
