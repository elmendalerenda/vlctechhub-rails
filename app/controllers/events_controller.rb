class EventsController < ApplicationController
  respond_to :html, :json
  
  def home

    if request.env['HTTP_USER_AGENT'].downcase.index('applewebkit/')
      redirect_to :controller=>'mobile', :action => 'show'
    else 
      render :action => "home"
    end
    
  end

  def mailchimp
    year = params[:year].to_i
    month = params[:month].to_i

    @results = Event.all(conditions: {'year' =>year, 'month' => month})

    @results = clean_events(@results)
    @results = add_week_day(@results)

    render :action => "mailchimp"
  end

  def show
    @events = Event.all

    @events = clean_events(@events)
    @events = add_week_day(@events)

    render :json => @events
  end

end
