class Associations {
  constructor(entry, targetTableName, keyMap, name = null) {
    this.entry = entry;
    this.targetTableName = targetTableName;
    this.keyMap = keyMap;
    this.name = name;
  }

  getTitle () {
    return `${this.entry.getTitle()}的${this.name || this.targetTableName}`;
  }

  getUrl () {
    let params = [];
    for (const key in this.keyMap) {
      params.push(`${key}=${this.entry.getValue(this.keyMap[key])}`);
    }
    return `/ragdoll/${this.targetTableName}?${params.join('&')}`;
  }

  toOption () {
    return {
      title: this.getTitle(),
      url: this.getUrl(),
    };
  }
}

class BaseEntry {
  constructor(originData, tableName, models) {
    this.originData = originData;
    this.tableName = tableName;
    this.models = models;
    this._associations = [];
    this.created();
  }

  created () {
    return;
  }

  getTitle () {
    return `${this.tableName}(id: ${this.id})`;
  }

  get id () {
    return this.originData.id;
  }

  setAssociation(target, keys, name) {
    this._associations.push(new Associations( this, target, keys, name));
  }

  getOptions () {
    const options = this._associations.map((association) => {
      return association.toOption();
    })
    return options;
  }

  getUrl () {
    return `/ragdoll/${this.tableName}/${this.id}`;
  }

  toOption () {
    return {
      title: this.getTitle(),
      url: this.getUrl(),
    };
  }

  getValue (key) {
    return this.originData[key];
  }

  getDetail () {
    return this.originData;
  }
}

module.exports = BaseEntry;

