class Post
  include Mongoid::Document
  field :title, type: String
  field :body, type: String
  field :image, type: String
  field :category, type: String
  field :order, type: Integer
  field :created_at, type: Time
  field :updated_at, type: Time
end
