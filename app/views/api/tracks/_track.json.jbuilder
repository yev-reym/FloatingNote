

json.extract! track, :id, :title, :genre, :private, :uploader_id, :track_file ,:tags,:description, :photo, :created_at
json.trackUrl url_for(track.track_file)
if track.photo.attached? 
    json.photoUrl url_for(track.photo)
else 
    json.photoUrl image_url('default-image.png')
end