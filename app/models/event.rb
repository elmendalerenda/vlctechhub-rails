class Event
  include Mongoid::Document
  field :name, :type => String
  field :description, :type => String
  field :day, :type => Int
  field :month, :type => Int
  field :year, :type => Int
  field :organizer, :type => String
  field :location, :type => String
  field :location_url, :type => String
  field :url, :type => String
end
