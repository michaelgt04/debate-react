class CreateParticipations < ActiveRecord::Migration[5.0]
  def change
    create_table :participations do |t|
      t.timestamps
      t.belongs_to :debate
      t.belongs_to :registration
    end
  end
end
