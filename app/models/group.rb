class Group < ApplicationRecord
  has_many :messages
  has_many :users, through: :messages
  validates_presence_of :name, :description, :icon
end
