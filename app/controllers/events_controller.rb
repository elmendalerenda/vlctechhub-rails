class EventsController < ApplicationController
  respond_to :html, :json

  #def index
  #  @events = Event.all

  #  respond_with(@events)
  #end

  def show
    @event = Event.find(params[:id])
  end
end
