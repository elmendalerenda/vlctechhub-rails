class Admin::BaseController < ApplicationController
  layout 'admin'
  
  user = ENV['ADMIN_USER'] || 'test'
  pass = ENV['ADMIN_PASSWORD'] || 'test'
  http_basic_authenticate_with :name => user, :password => pass
end