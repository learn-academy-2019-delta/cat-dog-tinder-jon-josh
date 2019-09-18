superhero_attributes = [
  {
    name: 'Flash',
    age: 24,
    enjoys: 'Quick strolls around the world.'
  },
  {
    name: 'Wolverine',
    age: 82,
    enjoys: 'Getting drunk.'
    },
    {
    name: 'Wonder Woman',
    age: 99,
    enjoys: 'Flying her invisible jet.'
    }
]

superhero_attributes.each do |attributes|
  Superhero.create(attributes)
end


# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
