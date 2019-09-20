class UsersController < ApplicationController
    def index
        Users = User.all
        render json: Users
    end

    def show
        user = User.find params[:id]
        redner json: user
    end

    def update
        user = User.find params[:id]
        user.update_attributes(user_params)
    end

    Private
    def user_params
        params.require(:user).permit([name, :avatar])
    end
end
