class GroupWithMessagesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :icon, :created_at
  has_many :messages

  def created_at
    object.created_at.strftime("%b %d %y @ %l:%M%P")
  end
end
