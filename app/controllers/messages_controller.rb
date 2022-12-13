class MessagesController < ApplicationController
  def index
    render json: Message.all
  end

  def create
    render json: Message.create!(message_params), include: "*.*"
  end

  private

  def message_params
    params.permit(:content, :group_id, :user_id)
  end
end
