class PasswordsController < Clearance::PasswordsController
  def new
    render inertia: "Auth/ForgotPassword"
  end

  def create
    super
  end
end
