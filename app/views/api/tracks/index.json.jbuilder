

json.tracks do 
    json.partial! 'api/tracks/tracks', tracks: @tracks
end

json.uploaders do 
    @tracks.each do |track|
        json.set! track.uploader.id do 
            json.partial! 'api/users/user', user: track.uploader 
        end
    end
end