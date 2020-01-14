/**
 * 标签管理
 */
const Label = require('../sqlConfig/model/label')
const { Len } = require('../util/api')


module.exports = {
  // 查询所有标签
  getAllLabels: async () => {
    return Label.findAll({
        attributes: ['id', 'index', 'label', 'name']
    })
  },
  
  //新增
  addLabel: async label => {
    return Label.create(label);
  },

  //编辑
  updateLabel: async options => {
    let _id = options.id;
    let label = await Label.findAll({
      where: {
          id: _id
      }
    })
    if (Len(label)) {
      Label.update(options, {
          where: {
              id: _id
          }
      })
      return true;
    } else {
        return false
    }
}
}
