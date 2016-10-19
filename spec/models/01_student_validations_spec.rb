require 'rails_helper'

RSpec.describe Student, type: :model do
  let!(:student) { FactoryGirl.create(:student) }

  it 'is valid with valid attributes' do
    expect(student).to be_valid
  end

  it 'is not valid with non-valid attributes' do
    student1 = FactoryGirl.build(:student, first_name: '')
    student2 = FactoryGirl.build(:student, last_name: '')
    student3 = FactoryGirl.build(:student, username: '')
    student4 = FactoryGirl.build(:student, password: '')
    student5 = FactoryGirl.build(:student, password_confirmation: 'different')
    expect(student1).to_not be_valid
    expect(student2).to_not be_valid
    expect(student3).to_not be_valid
    expect(student4).to_not be_valid
    expect(student5).to_not be_valid
  end
end
