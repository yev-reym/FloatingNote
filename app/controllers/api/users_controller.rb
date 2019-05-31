class Api::UsersController < ApplicationController 

    def info_check
        @user = User.find_by(email: params[:info]) || User.find_by(profile_url: params[:info])

        if @user
            render json: {info: params[:info], exists: true }
        else 
            render json: {info: params[:info], exists: false }
            # if params[:info].split('.').length == 2 || params[:info].split('@').length == 2
            #     render json: {message: 'Enter a valid email address or profile url.'}
            # else 
            #     render json: {message: 'That profile url does not exist'}
            # end
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
        params.require(:user).permit(:username, :email, :password, :age, :gender, :profile_url)
    end


end