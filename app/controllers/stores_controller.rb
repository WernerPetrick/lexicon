class StoresController < ApplicationController
  def index
    render inertia: "Stores/Index"
  end
end
