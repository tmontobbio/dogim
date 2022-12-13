class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :display_name
      t.string :breed
      t.integer :age
      t.string :favorite_toy
      t.text :bio
      t.string :profile_img
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
