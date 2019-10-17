const BaseModel = require('./base');

class InterviewApplications extends BaseModel {
  created () {
    this.setAssociation('applications', {
      id: 'application_id',
    })
    this.setAssociation('group_interviews', {
      id: 'group_interview_id',
    }, '面试详情')
    this.setAssociation('interview_feedback', {
      group_interview_id: 'group_interview_id',
      application_id: 'application_id',
    }, '面试反馈')
  }
}

module.exports = InterviewApplications;

