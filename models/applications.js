const BaseModel = require('./base');

class Applications extends BaseModel {
  created () {
    this.setAssociation('candidates', {
      id: 'candidate_id',
    })
  }
}

module.exports = Applications;

