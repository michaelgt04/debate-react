class CreateTeachers < ActiveRecord::Migration[5.0]
  def change
    create_table :teachers do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :sign_in_count, default: 0
    end
  end
end
