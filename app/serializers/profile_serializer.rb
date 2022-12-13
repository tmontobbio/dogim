class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :breed, :age, :favorite_toy, :bio, :profile_img, :user_id
end
