class TeachersController < ApplicationController
  before_action :authenticate_teacher

  def index
    binding.pry
    students = current_teacher
  end

end
