

# first we pass the track info 
json.track do 
    json.partial! 'api/tracks/track', track: @track
end

# then we pass user info for the track show page
json.uploader do
    json.partial! 'api/users/user', user: @track.uploader
end
