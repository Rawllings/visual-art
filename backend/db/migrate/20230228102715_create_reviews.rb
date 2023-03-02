class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :comment
      t.references :user, foreign_key: true
      t.references :photo, foreign_key: true
    end
  end
end
