class ArticlesIndex < Chewy::Index
  define_type ::WikiArticle.all do |index|
    field :title, type: 'text'
    field :heading, type: 'text'
    field :body, type: 'text'
    field :categories, type: :keyword, value: ->(article) { JSON.parse(article.category) }
    #field :published_at, type: :datetime
  end

  def self.category(text)
    query( match: {category: text} )
  end

  def self.title(text)
    query( match: {title: text} )
  end
end
