class ProfilesController < ApplicationController
  def show
    profile = User.find(session[:user_id]).profile
    render json: profile, status: :accepted
  end

  def create
    user = User.find(session[:user_id])
    new_profile = Profile.create!(profile_params.merge({ user_id: user.id }))
    render json: new_profile, status: :created
  end

  def update
    profile = User.find(session[:user_id]).profile
    profile.update!(profile_params)
    render json: profile, status: :accepted
  end

  private

  def profile_params
    params.permit(:display_name, :breed, :age, :favorite_toy, :bio, :profile_img)
  end
end
