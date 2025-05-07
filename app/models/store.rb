class Store < ApplicationRecord
  has_many :books, dependent: :destroy
end
