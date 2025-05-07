class ApplicationController < ActionController::Base
  include Clearance::Controller
  allow_browser versions: :modern

  before_action :set_current_user_prop

  private

  def set_current_user_prop
    @current_user_prop = current_user&.as_json(only: [ :id, :email ])
  end
end
