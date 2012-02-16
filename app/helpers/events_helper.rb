module EventsHelper
  def show_date(event)
    "#{event.day}/#{event.month}/#{event.year}"
  end
end