class Api::UsersController < ApplicationController \

    def check_email
        @user = User.find_by(email: user_params[:email])

        if @user 
            render json: ["Email already exists!"], status: 401
        else 
            render json: "api/users/show"
        end
    end


    def create 
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render json: "api/users/show"
        else 
            render json: @user.errors.full_messages
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password, :age, :gender)
    end
end