
const { getAllLabels, addLabel, updateLabel } = require('../controllers/label')

module.exports = {
  getAllLabels: async ctx => {
    const labels = await getAllLabels();
    ctx.body = {
        code: 1,
        data: labels
    }
  },
  
  // 新增
  addLabel: async ctx => {
    let options = ctx.request.body;
    await addLabel(options);
    ctx.body = {
        code: 1,
        message: '新增成功'
    }
  },

  // 编辑
  updateLabel: async ctx => {
    let options = ctx.request.body;
    let result = await updateLabel(options)
    if (result) {
        ctx.body = {
            code: 1,
            message: '修改成功'
        } 
    } else {
        ctx.body = {
            code: 0,
            message: '修改失败'
        }
    }
  }
}
