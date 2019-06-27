# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri-s3'

User.destroy_all
admin_user = User.create!({username:'demo_user', email:'user@demo.com', age: 22, gender:'female', profile_url:'floatingnote.herokuapp/demo_user', password:'password123'})
larry_bird = User.create!({username:'da_birdman_larry', email:'larry@bird.com', age: 100, gender:'male', profile_url:'floatingnote.herokuapp/da_birdman', password:'password123'})
yevgeniy_reym = User.create!({username:'yev-reym', email:'yevgeniyreym@gmail.com', age: 22, gender:'male', profile_url:'floatingnote.herokuapp/yev-reym', password:'password123'})

# Track.destroy_all
# #fresh tracks
# cocao_kisses = Track.create!({title: 'Chance The Rapper- Cocao Butter Kisses' , uploader_id: yevgeniy_reym.id})

# man_who_has_everything = Track.create!({title: , uploader_id: yevgeniy_reym.id })

# die_with_a_smile = Track.create!({title: , uploader_id: demo_user.id })

# for_the_squad = Track.create!({title: , uploader_id: larry_bird.id })

# lying_together = Track.create!({title: , uploader_id: larry_bird.id })

# Track.create!({title: , uploader_id: })
# Track.create!({title: , uploader_id: })
# Track.create!({title: , uploader_id: })
# Track.create!({title: , uploader_id: })
# Track.create!({title: , uploader_id: })
# Track.create!({title: , uploader_id: })
