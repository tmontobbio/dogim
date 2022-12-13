class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :group_id, :created_at
  has_one :user

  def created_at
    object.created_at.strftime("%b %d %y @ %l:%M%P")
  end
end
