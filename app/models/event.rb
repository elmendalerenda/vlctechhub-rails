class Event
  include Mongoid::Document
  field :name
  field :description
  field :day, :type => Integer
  field :month, :type => Integer
  field :year, :type => Integer
  field :organizer
  field :location
  field :location_url
  field :url
  field :time
  field :icon
  field :follow
  
  validates_presence_of :name
  validates_presence_of :day
  validates_presence_of :month
  validates_presence_of :year
  validates_format_of   :time, :with => Vlctechhub::TIME_FORMAT, :message => 'must be in format HH:MM'
  validates_presence_of :organizer
  
  def self.clone_month_events(year_from, month_from, year_to, month_to)
    events = Event.actual_month_events(year_from, month_from)
    events = Event.clean_events(events)
    events.each { |event_attrs|
      event_attrs['month'] = month_to
      event_attrs['year'] = year_to
      Event.create(event_attrs)
    }
  end
  
  def self.actual_month_events(year, month)
    all(conditions: {'year' =>year, 'month' => month}, sort: [[:month, :asc],[:day, :asc]])
  end
  
  def self.clean_events(events)
    attributes_to_remove = ["_id", "_type", "updated_at", 'created_at']
    events.collect{ |x| x.as_document.reject{|key, v| attributes_to_remove.include?(key)} }
  end
     
end
