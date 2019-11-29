/**
 * 音乐管理模块
 */
const Router = require('koa-router')
const music = new Router()
const apimusic = new Router()
const musicManage = require('../../server/music')
/**
 * 获取所有歌曲
 */
music.get('/music', musicManage.getAllMusic)


apimusic.use('/api', music.routes(), music.allowedMethods())

module.exports = apimusic
