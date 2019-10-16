const BaseModel = require('./base');

class Candidates extends BaseModel {
  created () {
    this.setAssociation('applications', {
      candidate_id: 'id',
    })
  }
}

module.exports = Candidates;

