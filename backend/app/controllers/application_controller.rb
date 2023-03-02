class ApplicationController < Sinatra::Base
set default_content_type: "application/json"


# //PHOTOS

get "/photos" do
    photo = Photo.all

    photo.to_json(include: [:reviews, :users])
end

get "/photos/:id" do
    photo = Photo.find_by(id: params[:id])
    photo.to_json
end

post "/photos" do
    photo = Photo.create(
      name: params[:name],
      price: params[:price]  
    )

    {
        "message" => "Success"
}.to_json
end

patch "/photos/:id" do
    photo = Photo.find_by(id: params[:id])
    photo.update(
      name: params[:name],
      price: params[:price]  
    )

    {
        "message" => "Successfully updated"
}.to_json
end

delete "/photos/:id" do
    photo = Photo.find_by(id: params[:id])
    photo.destroy

end

# USERS 

get "/users" do
    user = User.all

    user.to_json
end

get "/users/:id" do
    user = User.find_by(id: params[:id])
    user.to_json
end

post "/users" do
    user = User.create(
      name: params[:name],
      location: params[:location],
      phone: params[:phone]
    )

    {
        "message" => "Success"
}.to_json
end

patch "/users/:id" do
    user = User.find_by(id: params[:id])
    user.update(
        name: params[:name],
        location: params[:location],
        phone: params[:phone] 
    )

    {
        "message" => "Successfully updated"
}.to_json
end

delete "/users/:id" do
    user = User.find_by(id: params[:id])
    user.destroy

end

# REVIEWS
get "/reviews" do
    review = Review.all

    review.to_json
end

get "/reviews/:id" do
    review = Review.find_by(id: params[:id])
    review.to_json
end

post "/reviews" do
    review = Review.create(
      rating: params[:rating],
      comment: params[:comment],
      user_id: params[:user_id],
      photo_id: params[:photo_id]

    )

    {
        "message" => "Success"
}.to_json
end

patch "/reviews/:id" do
    review = Review.find_by(id: params[:id])
    review.update(
        rating: params[:rating],
        comment: params[:comment],
        user_id: params[:user_id],
        photo_id: params[:photo_id]
    )

    {
        "message" => "Successfully updated"
}.to_json
end

delete "/reviews/:id" do
    review = Review.find_by(id: params[:id])
    review.destroy

end

end