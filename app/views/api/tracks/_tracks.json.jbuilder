

json.array! tracks do |track|
    json.extract! track, :id, :title, :genre, :private, :uploader_id
    json.trackUrl track_path(track.track_file) 
end