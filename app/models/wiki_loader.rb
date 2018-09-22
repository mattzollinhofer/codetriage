class WikiLoader
  def self.load(file_name)
    i = 0
    File.open(file_name, "r").each_line do |line|
      puts 'asdf'
      article = JSON.parse(line)
                    .with_indifferent_access
                    .slice(:title, :category, :heading, :text, :timestamp)
      puts article

      next unless article["title"].present?
      article[:body] = article.delete :text
      article[:published_at] = article.delete :timestamp
      WikiArticle.create(article)

      break if (i = i+1) == 5000
      #os = OpenStruct.new(article.slice(:title))
      #if (os.title.present?)
      #  WikiArticle.create(article)
      #end
    end
  end
end
