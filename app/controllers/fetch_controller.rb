require 'pry'
require 'json'
require 'rest-client'


class FetchController < ApplicationController 

    def fetch_nutrition_data 
        input = params[:input]
        binding.pry
    end 




end 