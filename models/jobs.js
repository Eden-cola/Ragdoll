const BaseModel = require('./base');

class Jobs extends BaseModel {
  created () {
    this.setAssociation('applications', {
      job_id: 'id',
    })
  }
}

module.exports = Jobs;

