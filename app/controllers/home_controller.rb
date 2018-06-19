class HomeController < ApplicationController
  def top
    request = Curl.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a7fd6c6a891c47f28324af0a402f6f91')
    articles = JSON.parse(request.body_str)
    @articles = articles['articles']
  end
end
