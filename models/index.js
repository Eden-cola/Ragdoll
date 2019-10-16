const db = require('../db');
const _ = require('lodash');

class Model {
  constructor({
    tableName,
    Entry,
  }) {
    this.tableName = tableName;
    this.Entry = Entry;
  }

  /**
   * 根据where条件获取当前model的一组结果集
   * @param Object|Function where where条件
   * @return Array[Entity]
   */
  async getListByWhere (where) {
    const list = await db.select().from(this.tableName).where(where).limit(20);
    return list.map(row => new this.Entry(row, this.tableName));
  }

  /**
   * 根据Id获取当前model的某一个Entity
   * @return Entity
   */
  async getEntityById (id) {
    const list = await this.getListByWhere({ id });
    return list[0];
  }
}

const models = { _models: [] };

models.addModel = function (name, entry) {
  if (!entry) {
    entry = require(`./${name}`);
  }
  this._models[name] = new Model({
    tableName: name,
    Entry: entry,
  });
}

models.getModel = function (name) {
  const model = this._models[name];
  return model;
}

models.addModel('applications');
models.addModel('candidates');

module.exports = models

