class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :index]

  def index
  end

  def home
  end
end
