class Api::TracksController < ApplicationController

    def index
        if params[:user]
            @tracks = User.find_by(email: params[:user][:email]).tracks
            render :index
        else 
            @tracks = Track.all 
            render :index
        end
    end
    
    def create 
        @track = Track.new(track_params)
        if @track.save
            render :show
        else 
            render json: @track.full_messages.errors, status: 404
        end
    end

    def update
        @track.find_by(id: params[:track][:id])

        if @track.update(track_params)
            render :show
        else 
            render @track.full_messages.errors, status: 422
        end
    end

    def destroy
        @track.find_by(id: params[:track][:id])
        @track.destroy 
        render json: {id: @track.id }
    end

    private 

    def track_params
        params.require(:track).permit(:title,:genre,:private,:tags,:uploader_id,:track_file,:description)
    end
end