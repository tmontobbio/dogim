class Profile < ApplicationRecord
  belongs_to :user
  validates_uniqueness_of :user_id
  validates_uniqueness_of :display_name, allow_nil: true
end
