class ArticlesIndex < Chewy::Index
  define_type ::WikiArticle.all do |index|
    field :title, type: 'text', fielddata: true
    field :heading, type: 'text'
    field :body, type: 'text'
    field :read_time, type: 'integer', value: ->(article) { article.body.split(" ").size / 20 }
    field :categories, type: :keyword, value: ->(article) { JSON.parse(article.category) }
    field :created_at, type: :date
    field :updated_at, type: :date
    field :published_at, type: :date
  end

  def self.sig_categories_for_all_categories
    aggregations(
      categories: {
        terms: { field: "categories" },
        aggregations: {
          significant_categories: {
            significant_terms: {
              field: "categories"
            }
          }
        }
      }
    ).aggs["categories"]["buckets"].each do |category|
      next if category['key'].include? "Pages"
      next if category['key'].include? "Archived"
      next if category['key'].include? "Published"
      puts
      puts
      puts category['key']
      puts "-"*category['key'].size
      category["significant_categories"]["buckets"].map{|x| puts "#{x['key']}: #{x['doc_count']}/#{x['bg_count']} -- #{x['score']}" }
    end;nil
  end

  def self.sig_categories_for_category(category)
    exclude = [category, "Published", "Archived"]
    query(terms: {categories: [category]})
      .aggregations(significant_categories: {
        significant_terms: {
          field: "categories",
          exclude: exclude
        }
      })
      .aggs["significant_categories"]["buckets"]
      .map{|x| puts "#{x['key']}: #{x['doc_count']}/#{x['bg_count']} -- #{x['score']}" }
  end

  def self.sig_title_terms_for_category(category, background)
    query(terms: {categories: [category]})
      .aggregations(significant_categories: {
        significant_terms: {
          field: "title",
          background_filter: {
            terms: { categories: [background] }
          }
        }
      })
      .aggs["significant_categories"]["buckets"]
      .map{|x| puts "#{x['key']}: #{x['doc_count']}/#{x['bg_count']} -- #{x['score']}" }
  end

  def self.category(text)
    query( match: {category: text} )
  end

  def self.title(text)
    query( match: {title: text} )
  end
end
