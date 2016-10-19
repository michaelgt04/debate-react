require 'factory_girl_rails'

FactoryGirl.define do
  factory :student do
    username "thegreatest"
    first_name "Jackie"
    last_name "Robinson"
    password "greatstudent"
    password_confirmation "greatstudent"
  end

  factory :teacher do
  end

  factory :course do
  end
end
