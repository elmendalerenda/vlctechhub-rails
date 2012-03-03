class MobileController < ApplicationController
  layout 'mobile'
  
  def show
    render :action => "mobile"
  end  
  
end
