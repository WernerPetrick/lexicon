class CreateBooks < ActiveRecord::Migration[8.0]
  def change
    create_table :books do |t|
      t.string :title
      t.references :author, null: false, foreign_key: true
      t.references :publisher, null: false, foreign_key: true
      t.string :category
      t.string :isbn
      t.decimal :price
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
