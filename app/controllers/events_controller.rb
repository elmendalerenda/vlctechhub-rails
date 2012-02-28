class EventsController < ApplicationController
  respond_to :html, :json

  def mailchimp
    year = params[:year].to_i
    month = params[:month].to_i

    @results = Event.all(conditions: {'year' =>year, 'month' => month})

    render :action => "mailchimp"
  end

  def show
    @events = Event.all

    @events = clean_events(@events)
    @events = add_week_day(@events)

    respond_with(@events)
  end


end
