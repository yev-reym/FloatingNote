class Api::SessionsController < ApplicationController


    def create 
        @user = User.find_by_credentials(
            params[:user][:info],
            params[:user][:password]
            )

        if @user
            login!(@user)
            render "api/users/show"
        else
            if (params[:user][:password].length == 0)
                render json: ['Enter a password.'], status: 401
            else
                render json: ['This password is incorrect.'], status: 422
            end
        end
    end

    def destroy 
        if current_user 
            logout!
            render json: { message: "Logout Successful"}, status: 200
        else 
            render json: {message: "You must be signed in to logout"}, status: 404
        end
    end 

end