class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.integer :grade, null: false
      t.string :subject, null: false
      t.integer :school_year, null: false
      t.timestamps

      t.belongs_to :teacher
    end
  end
end
