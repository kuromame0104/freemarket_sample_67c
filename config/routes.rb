Rails.application.routes.draw do
  devise_for :users
  root to: 'items#new'
  resources :items, only: [:index, :show, :new, :create] do
    #Ajaxで動くアクションのルートを作成
    collection do
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
    end
  end
  resources :signups do
    get 'log_in'
    collection do
      get 'firstRegister'
      get 'secondRegister'
      get 'thirdRegister'
      get 'fourthRegister'
    end
  end
end
