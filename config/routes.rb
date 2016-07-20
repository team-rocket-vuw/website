Rails.application.routes.draw do
  root 'welcome#index'

  get 'index' => 'welcome#index'

  resources :posts
end
