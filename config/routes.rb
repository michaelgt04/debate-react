Rails.application.routes.draw do
  mount ActionCable.server => '/websocket'

  post 'teacher_token' => 'teacher_token#create'
  post 'student_token' => 'student_token#create'
  root 'static_pages#index'
end
