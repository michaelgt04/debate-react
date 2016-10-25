class CreateRegistrations < ActiveRecord::Migration[5.0]
  def change
    create_table :registrations do |t|
      t.timestamps

      t.belongs_to :student
      t.belongs_to :course
    end
  end
end
