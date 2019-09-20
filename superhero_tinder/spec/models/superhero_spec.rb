require 'rails_helper'
#
# RSpec.describe Superhero, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end
RSpec.describe Superhero, type: :model do
  it "should validate name" do
    superhero = Superhero.create
    expect(superhero.errors[:name]).to_not be_empty
  end
end
