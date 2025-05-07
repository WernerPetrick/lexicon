class Book < ApplicationRecord
  belongs_to :author
  belongs_to :publisher
  belongs_to :store
  has_one_attached :cover_image
end
