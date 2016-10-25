class TeachersController < ApplicationController
  before_action :authenticate_teacher

  def index
    registrations = current_teacher.registrations
    debates = current_teacher.debates
    courses = current_teacher.courses
    response = { students: [], debates: [], courses: [] }
    registrations.each do |registration|
      response[:students] << {
        studentFirst: registration.student.first_name,
        studentLast: registration.student.last_name,
        studentUsername: registration.student.username
      }
    end
    debates.each do |debate|
      response[:debates] << {
        debateTopic: debate.topic,
        debateClass: debate.course.subject
      }
    end
    courses.each do |course|
      response[:courses] << {
        courseGrade: course.grade,
        courseSubject: course.subject,
        courseYear: course.school_year
      }
    end
    render json: response
  end

end
