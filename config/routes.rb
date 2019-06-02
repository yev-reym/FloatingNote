Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do 
    get '/users/info_check', to: 'users#info_check'
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
  end
end

