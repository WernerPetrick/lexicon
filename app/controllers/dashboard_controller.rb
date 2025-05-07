class DashboardController < ApplicationController
  before_action :require_login
  def show
    render inertia: "Dashboard/Dashboard", props: {
      current_user: @current_user_prop
    }
  end
end
