Canvas::Application.routes.draw do

  match 'grid' => 'public_pages#grid', as: :grid
  match 'support-filter' => 'public_pages#support_filter', as: :support_filter
  match 'radians' => 'public_pages#radians', as: :radians
  match 'geometry-set' => 'public_pages#geometry_set', as: :geometry_set

  root :to => 'public_pages#index'
  
end
