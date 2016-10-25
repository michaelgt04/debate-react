class Course < ApplicationRecord
  validates :grade, presence: true, numericality: { only_integer: true }
  validates :subject, presence: true
  validates :school_year, presence: true, numericality: { only_integer: true }

  belongs_to :teacher
  has_many :registrations
  has_many :debates
end
