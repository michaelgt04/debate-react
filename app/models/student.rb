class Student < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 5 }
  validates :password_confirmation, presence: true, length: { minimum: 5 }
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :registrations
  has_many :participants, through: :registrations

  def self.from_token_request request
    username = request.params["auth"] && request.params["auth"]["username"]
    self.find_by username: username
  end
end
