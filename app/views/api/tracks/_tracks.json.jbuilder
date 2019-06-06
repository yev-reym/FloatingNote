

tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :title, :genre, :private, :uploader_id, :description
        json.trackUrl url_for(track.track_file) 
    end
end