class WikiArticle < ActiveRecord::Base
  validates :title, :category, :body, :heading, :published_at, presence: true
end
