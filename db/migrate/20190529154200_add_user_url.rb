class AddUserUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_url, :string, null: false 
    add_index :users, :profile_url, unique: true
  end
end
