Rails.application.routes.draw do
  devise_for :admins#, skip: [:registrations]
  root 'welcome#index'

  get 'index' => 'welcome#index'

  resources :posts

  post 'preview' => 'preview#show', as: :preview
end
