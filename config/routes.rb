Rails.application.routes.draw do
  mount ActionCable.server => '/websocket'

  post 'teacher_token' => 'teacher_token#create'
  post 'student_token' => 'student_token#create'
  # get '*path', to: redirect('/')
  root 'static_pages#index'

  resources :teachers, only: [:index]
end
