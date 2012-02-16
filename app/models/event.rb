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
end