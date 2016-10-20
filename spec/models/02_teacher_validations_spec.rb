require 'rails_helper'

RSpec.describe Teacher, type: :model do
  let!(:teacher) { FactoryGirl.create(:teacher) }

  it 'is valid with valid attributes' do
    expect(teacher).to be_valid
  end

  it 'is not valid with non-valid attributes' do
    teacher1 = FactoryGirl.build(:teacher, first_name: '')
    teacher2 = FactoryGirl.build(:teacher, last_name: '')
    teacher3 = FactoryGirl.build(:teacher, username: '')
    teacher4 = FactoryGirl.build(:teacher, password: '')
    teacher5 = FactoryGirl.build(:teacher, password_confirmation: 'different')
    expect(teacher1).to_not be_valid
    expect(teacher2).to_not be_valid
    expect(teacher3).to_not be_valid
    expect(teacher4).to_not be_valid
    expect(teacher5).to_not be_valid
  end
end
