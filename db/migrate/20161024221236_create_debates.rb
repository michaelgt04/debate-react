class CreateDebates < ActiveRecord::Migration[5.0]
  def change
    create_table :debates do |t|
      t.string :topic, null: false
      t.timestamps

      t.belongs_to :course
    end
  end
end
