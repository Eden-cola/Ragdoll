const BaseModel = require('./base');

class Users extends BaseModel {
  created () {
    this.setAssociation('interview_interviewers', {
      interviewer_id: 'id',
    })
  }
}

module.exports = Users;

