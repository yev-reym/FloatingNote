class Api::SessionsController < ApplicationController

    def check_email
        @user = User.find_by(:email)

        if @user 
            render json: "api/users/show"
        else 
            render json: ["Email not linked to any user!"], status: 401
        end
    end

    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
            )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid Credentials"], status: 401
        end
    end

    def destroy 
        logout!
        render json: { message: "Logout Successful"}
    end 

end