class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :genre
      t.string :tags
      t.boolean :private, default: false 
      t.integer :uploader_id, null: false 

      t.timestamps
    end
    add_index :tracks, :uploader_id
  end
end
