Message.destroy_all
Profile.destroy_all
User.destroy_all
Group.destroy_all

puts "seeding"

puts "...groups..."
Group.create!(name: "Ball dogs anonymous", description: "A place where ball obsessed dogs can get back on the right track", icon: "https://cdn.shopify.com/s/files/1/0051/8442/1991/products/Tennis-balls-1024x1024_1400x.jpg?v=1585582415")
Group.create!(name: "Agressive dogs", description: "Join us to talk about why the whole world is against us", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX74rp2p8XxMGOfuJbqatvPf2nCT6_Uc7n_Q&usqp=CAU")

puts "done seeding"

# Profile.create!(display_name: "Ladybug", breed: "Labrador", age: 7, favorite_toy: "Ball!", bio: "I'm just happy to be here!", profile_img: "https://i.imgur.com/FOtaOAr.jpg", user_id: 1)
