class Api::UsersController < ApplicationController 

    def info_check
     
        @user = User.find_by(email: params[:info]) || User.find_by(profile_url: params[:info])

        if @user
            render json: {info: params[:info], exists: true }
        else 
            if valid_email?(params[:info])
                render json: {info: params[:info], exists: false }
            elsif not_email(params[:info])
                render json: ['That profile url does not exist'], status: 422
            elsif invalid_email?(params[:info])
                render json: ['Enter a valid email address or profile URL.'], status: 422
            end
        end
    end


    def create 
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 404
        end
    end

    def update 
        @user = User.find_by(email: params[:user][:email])

        if @user.update(user_params)
            render :show
        else
            render json: @user.full_messages.errors, status: 404
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password, :age, :gender, :profile_url)
    end

    def valid_email?(info)
        info.split('.').length >= 2 && info.split('@').length == 2
    end

    def invalid_email?(info)
        info.split('.').length < 2 || info.split('@').length != 2
    end

    def not_email(info)
        !info.include?('@') && !info.include?('.') && !info.empty?
    end

end