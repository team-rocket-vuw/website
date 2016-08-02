class Post < ActiveRecord::Base
  validates :preview, presence: true
end
