class Registration < ApplicationRecord
  belongs_to :student
  belongs_to :course
  has_many :participations
end
