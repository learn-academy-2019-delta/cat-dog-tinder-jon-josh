class SuperherosController < ApplicationController
    def index
        superheroes = Superhero.all
        render json: superheroes
    end

    def create
        superhero = Superhero.create(superhero_params)
            if superhero.valid?
                render json: superhero
            else
                render json: superhero.errors, status: :unprocessable_entity
            end
    end

    def destroy
        superhero = Superhero.destroy(params[:id])
        render json: Superhero.all
    end

    def superhero_params
        params.require(:superhero).permit(:name, :age, :enjoys)
    end

end
