const BaseModel = require('./base');

class InterviewInterviewers extends BaseModel {
  created () {
    this.setAssociation('users', {
      id: 'interviewer_id',
    })
    this.setAssociation('group_interviews', {
      id: 'group_interview_id',
    }, '面试详情')
    this.setAssociation('interview_feedback', {
      group_interview_id: 'group_interview_id',
      interviewer_id: 'interviewer_id',
    }, '面试反馈')
  }
}

module.exports = InterviewInterviewers;

