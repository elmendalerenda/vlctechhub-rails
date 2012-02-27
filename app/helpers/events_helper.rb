module EventsHelper
  def show_date(event)
    "#{event.day}/#{event.month}/#{event.year} #{event.time}"
  end
end
