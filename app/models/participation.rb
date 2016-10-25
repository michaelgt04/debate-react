class Participation < ApplicationRecord
  belongs_to :debate
  belongs_to :registration
  has_many :posts
end
