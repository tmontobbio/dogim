class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :icon, :created_at

  def created_at
    object.created_at.strftime("%b %d %y @ %l:%M%P")
  end
end
