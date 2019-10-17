const BaseModel = require('./base');

class Applications extends BaseModel {
  created () {
    this.setAssociation('candidates', {
      id: 'candidate_id',
    })
    this.setAssociation('jobs', {
      id: 'job_id',
    }, '所属职位')
    this.setAssociation('interview_applications', {
      application_id: 'id',
    }, '面试列表')
  }
}

module.exports = Applications;

