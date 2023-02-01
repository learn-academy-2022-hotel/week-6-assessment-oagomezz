# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) methods or parameters defined in ApplicationControllor are inherited by the BlogPostsControllor and can be used if necessary. 
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is defined as the list of all the blog postings that are listed. 
    @posts = BlogPost.all
  end

  # ---3) a method for the show html verb is being defined which will allow the individual blog posts to be accessed.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) a method for the RESTful route new. Allows for new blog posts to be created within the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) defined the variable @post to create new blog postings using the blog post params as values.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) @post is defined as the database method find using the id as the value and returns the blog post with the assigned id number. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)@post.update is going to change the data that was already present in the blog post with the new applied values. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) method deletes the blog posting from the website and redirects back to the landing page when completed. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Any parameters are not accessible by the users. Defines the params that are requrired such as the blog_post and the one's that are permitted such as title and content. Meaning the title and content can be used if new blog posts are created. 
  private
  def blog_post_params
    # ---10)params require ensures that the blog_post parameter is present and that title and content paramters can be altered by the user. IE. creating new blog posts or updating the current blog posts.
    params.require(:blog_post).permit(:title, :content)
  end
end
