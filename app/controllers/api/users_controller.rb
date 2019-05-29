class Api::UsersController < ApplicationController \

    def check_email
        @user = User.find_by(email: params[:email])

        if @user 
            render json: {email: params[:email], exists: true }
        else 
            render json: {email: params[:email], exists: false }
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