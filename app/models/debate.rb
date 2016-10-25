class Debate < ApplicationRecord
  validates :topic, presence: true

  belongs_to :course
end
