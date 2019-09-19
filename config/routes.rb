Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/fetch_nutrition_data', to: 'fetch#fetch_nutrition_data'
end
