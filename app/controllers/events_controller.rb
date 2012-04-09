class EventsController < ApplicationController
  respond_to :html, :json
  
  def home
    if Vlctechhub::Mobile.is_mobile?(request.user_agent)
      redirect_to :controller=>'mobile', :action => 'show'
    else 
      render :action => "home"
    end
  end

  def mailchimp
    year = params[:year].to_i
    month = params[:month].to_i

    @results = Event.all(conditions: {'year' =>year, 'month' => month}, sort: [[:month, :asc],[:day, :asc]])

    @results = clean_events(@results)
    @results = add_week_day(@results)

    render :action => "mailchimp"
  end

  def show
    year = params[:year].to_i
    month = params[:month].to_i
    
    @events = Event.all(conditions: {'year' =>year, 'month' => month}, sort: [[:month, :asc],[:day, :asc]])

    @events = clean_events(@events)
    @events = add_week_day(@events)

    render :json => @events
  end

end
