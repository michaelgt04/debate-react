class Teacher < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 5 }
  validates :password_confirmation, presence: true, length: { minimum: 5 }
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :courses
  has_many :registrations, through: :courses
  has_many :debates, through: :courses

  def self.from_token_request(request)
    username = request.params["auth"]["email"]
    self.find_by username: username
  end
end
