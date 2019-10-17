const BaseModel = require('./base');

class GroupInterviews extends BaseModel {
  created () {
    this.setAssociation('interview_applications', {
      group_interview_id: 'id',
    })
    this.setAssociation('interview_interviewers', {
      group_interview_id: 'id',
    })
    this.setAssociation('interview_feedback', {
      group_interview_id: 'id',
    }, '面试反馈')
  }
}

module.exports = GroupInterviews;

