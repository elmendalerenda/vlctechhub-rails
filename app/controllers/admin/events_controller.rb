class Admin::EventsController < Admin::BaseController
  respond_to :html, :json

  # GET /admin/events
  # GET /admin/events.json
  def index
    @events = Event.all(sort: [[:month, :asc],[:day, :asc]] )

    respond_with(:admin, @events)
  end

  # GET /admin/events/1
  # GET /admin/events/1.json
  def show
    @event = Event.find(params[:id])

    respond_with(:admin, @event)
  end

  # GET /admin/events/new
  # GET /admin/events/new.json
  def new
    @event = Event.new

    respond_with(:admin, @event)
  end

  # GET /admin/events/1/edit
  def edit
    @event = Event.find(params[:id])

    respond_with(:admin, @event)
  end

  # POST /admin/events
  # POST /admin/events.json
  def create
    @event = Event.create(params[:event])

    respond_with(:admin, @event)
  end

  # PUT /admin/events/1
  # PUT /admin/events/1.json
  def update
    @event = Event.find(params[:id])
    @event.update_attributes(params[:event])

    respond_with(:admin, @event)
  end

  # DELETE /admin/events/1
  # DELETE /admin/events/1.json
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    respond_with(:admin, @event)
  end
  
  def clone
    Event.clone_month_events(params[:year_from], params[:month_from], 
      params[:year_to], params[:month_to])
    redirect_to :action => :index
  end
end
