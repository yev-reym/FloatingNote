

tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :title, :genre, :private, :uploader_id,:tags,:description, :track_file
        json.trackUrl url_for(track.track_file) 
        if track.photo.attached? 
            json.photoUrl url_for(track.photo)
        else 
            json.photoUrl image_url('default-image.png')
        end
    end
end