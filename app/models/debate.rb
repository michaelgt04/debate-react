class Debate < ApplicationRecord
  validates :topic, presence: true

  belongs_to :course
  has_many :participations
  has_many :posts, through: :participations
end
