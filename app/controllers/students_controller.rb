class StudentsController < ApplicationController
  before_action :authenticate_student

  def index
    registrations = current_student.registrations
    participations = current_student.participations
    response = { posts: [], debates: [], courses: [] }
    participations.each do |participation|
      participation.posts.each do |post|
        response[:posts] << {
          postBody: post.body,
          postTime: post.created_at
        }
      end
      response[:debates] << {
        debateTopic: participation.debate.topic,
        debateCourse: participation.debate.course.subject
      }
    end
    registrations.each do |registration|
      response[:courses] << {
        courseGrade: registration.course.grade,
        courseSubject: registration.course.subject,
        courseYear: registration.course.school_year
      }
    end
    render json: response
  end

end
