class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :name
      t.text :description
      t.string :icon

      t.timestamps
    end
  end
end
