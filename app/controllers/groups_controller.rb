class GroupsController < ApplicationController
  def index
    render json: Group.all, status: :ok
  end

  def create
    new_group = Group.create!(group_params)
    render json: new_group, status: :created
  end

  def show
    render json: Group.find(params[:id]), status: :ok, serializer: GroupWithMessagesSerializer, include: "*.*.*"
  end

  def destroy
    group = Group.find(params[:id])
    group.destroy
    head :no_content, status: :accepted
  end

  private

  def group_params
    params.permit(:name, :description, :icon)
  end
end
