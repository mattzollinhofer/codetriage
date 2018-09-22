class CreateWikiArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :wiki_articles do |t|
      t.string :title
      t.string :category
      t.string :heading
      t.string :body
      t.datetime :published_at

      t.timestamps
    end
  end
end
