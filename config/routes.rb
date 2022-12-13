Rails.application.routes.draw do
  resources :messages, only: [:create, :show]
  resources :groups, only: [:create, :destroy, :show, :index]
  resources :profiles, only: [:show]
  resources :users, only: [:show, :create]

  get "/me", to: "users#show"
  get "/api/profile", to: "profiles#show"
  get "/api/groups", to: "groups#index"
  get "/api/groups/:id", to: "groups#show"
  get "/api/messages", to: "messages#index"

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  post "/api/profile", to: "profiles#create"
  post "/api/groups", to: "groups#create"
  post "/api/messages", to: "messages#create"

  patch "/api/profile", to: "profiles#update"

  delete "/logout", to: "sessions#destroy"
  delete "/api/users/delete", to: "users#destroy"
  delete "/api/groups/:id", to: "groups#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
