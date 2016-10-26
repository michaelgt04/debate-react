class PostsController < ApplicationController
  before_action :authenticate_student

  def create
    binding.pry
    new_post = Post.new(body: params["post"])
  end

end
