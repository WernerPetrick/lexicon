class PagesController < ApplicationController
  def index
    render inertia: "Index", props: {
      current_user: @current_user_prop
    }
  end

  def about
    render inertia: "About"
  end

  def documentation
    render inertia: "Documentation"
  end

  def careers
    render inertia: "Careers"
  end

  def contact
    render inertia: "Contact"
  end

  def features
    render inertia: "Features"
  end

  def pricing
    render inertia: "Pricing"
  end
end
