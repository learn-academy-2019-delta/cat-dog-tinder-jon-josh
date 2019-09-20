require 'rails_helper'

describe "Superheroes API", type: :request do
    it "gets a list of Superheroes" do
        Superhero.create(name: 'Flash', age: 24, enjoys:'Quick strolls around the world.')

        get '/superheros'

        json = JSON.parse(response.body)

        expect(response).to have_http_status(:ok)

        expect(json.length).to eq 1
    end

    it "creates a superhero" do
      superhero_params = {
          superhero: {
          name: 'Storm',
          age: 38,
          enjoys: 'Making it rain!'
        }
      }

  post '/superheros', params: superhero_params
  expect(response).to have_http_status(:ok)
  new_superhero = Superhero.first
  expect(new_superhero.name).to eq('Storm')

end

    it "doesn't create a superhero withou a name" do
        superhero_params = {
            superhero: {
                age: 5,
                enjoys: "going on tinder"
            }
        }
        post '/superheros', params: superhero_params
        expect(response.status).to eq 422
        json = JSON.parse(response.body)
        expect(json['name']).to include "can't be blank"
    end

end
