Rails.application.routes.draw do
  get :contact, to: 'contact#index'

  get '(*path)', to: 'home#index'
  root 'home#index'
end
