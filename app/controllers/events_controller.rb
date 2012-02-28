class EventsController < ApplicationController
  respond_to :html, :json

  def mailchimp
    year = params[:year].to_i
    month = params[:month].to_i

    @results = Event.all(conditions: {'year' =>year, 'month' => month})

    render :action => "mailchimp"
  end

  def show
    @event = Event.find(params[:id])
  end
end
