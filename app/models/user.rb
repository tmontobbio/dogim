class User < ApplicationRecord
  has_secure_password
  has_one :profile
  has_many :messages
  has_many :groups, through: :messages

  validates_uniqueness_of :username
  validates :password, :password_confirmation, length: { minimum: 4, maximum: 20 }

  after_create :default_profile

  private

  def default_profile
    Profile.create!(profile_img: "https://img.lovepik.com/free-png/20210918/lovepik-dog-silhouette-png-image_400269384_wh1200.png", user_id: self.id)
  end
end
