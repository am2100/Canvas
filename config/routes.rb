Canvas::Application.routes.draw do

  match 'grid' => 'public_pages#grid', as: :grid
  match 'support-filter' => 'public_pages#support_filter', as: :support_filter
  match 'radians' => 'public_pages#radians', as: :radians

  root :to => 'public_pages#index'
  
end
