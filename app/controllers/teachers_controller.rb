class TeachersController < ApplicationController
  before_action :authenticate_teacher

  def index
    registrations = current_teacher.registrations
    response = {students: {}}
    registrations.each do |registration|
      response[:students]["student#{registration.id}"] = {
        studentFirst: registration.student.first_name,
        studentLast: registration.student.last_name,
        studentUsername: registration.student.username
      }
    render json: response
  end

end
