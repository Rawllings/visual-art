class AddColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :image_url, :text
  end
end
