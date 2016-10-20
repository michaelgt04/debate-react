class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'posts'
  end
end
