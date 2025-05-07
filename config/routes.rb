Rails.application.routes.draw do
  get "inertia-example", to: "inertia_example#index"
  root "pages#index"

  constraints Clearance::Constraints::SignedIn.new do
    get "documentation", to: "pages#documentation"
    get "/stores", to: "stores#index"
    get "/books", to: "books#index"
    get "/users", to: "users#index"
    delete "/sign_out", to: "sessions#destroy", as: "sign_out"
    get "/dashboard", to: "dashboard#show", as: :dashboard
  end

  get "about", to: "pages#about"
  get "features", to: "pages#features"
  get "contact", to: "pages#contact"
  get "careers", to: "pages#careers"
  get "pricing", to: "pages#pricing"

  get "/sign_up", to: "users#new", as: "sign_up"
  post "/sign_up", to: "users#create"
  get "/sign_in", to: "sessions#new", as: "sign_in"
  post "/sign_in", to: "sessions#create"
  get "/passwords/new", to: "passwords#new"

  resources :books
end
