Rails.application.routes.draw do
  post 'student_token' => 'student_token#create'
  root 'static_pages#index'
end
