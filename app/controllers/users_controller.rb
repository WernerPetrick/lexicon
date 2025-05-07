class UsersController < Clearance::UsersController
  def new
    render inertia: "Auth/SignUp"
  end

  def create
    Rails.logger.debug "--------------------------------------------------"
    Rails.logger.debug "UsersController#create received params: #{params.inspect}"

    begin
      permitted_params = user_params
      Rails.logger.debug "Permitted user_params: #{permitted_params.inspect}"
      Rails.logger.debug "Email from permitted_params: #{permitted_params[:email]}"
      Rails.logger.debug "Password present in permitted_params: #{permitted_params[:password].present?}"
    rescue ActionController::ParameterMissing => e
      Rails.logger.error "ParameterMissing error: #{e.message}"
      render inertia: "Auth/SignUp", props: { errors: { base: "An error occurred: #{e.message}" } }
      return
    end

    user = User.new(permitted_params)
    Rails.logger.debug "User object before save: #{user.inspect}"
    unless user.valid?
      Rails.logger.debug "User validation errors before save: #{user.errors.full_messages.join(', ')}"
    end

    if user.save
      sign_in(user)
      Rails.logger.debug "User saved successfully. ID: #{user.id}"
      render inertia: "Index"
    else
      Rails.logger.error "User save failed. Errors: #{user.errors.to_hash.inspect}"
      render inertia: "Auth/SignUp", props: { errors: user.errors.to_hash }
    end
    Rails.logger.debug "--------------------------------------------------"
  end

  def index
    render inertia: "Users/Index"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
