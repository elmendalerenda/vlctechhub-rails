module EventsHelper
    def show_date(event)
      "#{event.day}/#{event.month}/#{event.year} #{event.time}"
    end
end

def clean_events(events)
    attributes_to_remove = ["_id", "_type", "updated_at", 'created_at']
    events.collect{ |x| x.as_document.reject{|key, v| attributes_to_remove.include?(key)} }
end

def add_week_day(events)
  events.each {|x|
    wday = Time.local(x['year'], x['month'], x['day']).wday
    case wday
    when 0
      x['wday'] = 'Domingo'
    when 1
      x['wday'] = 'Lunes'
    when 2
      x['wday'] = 'Martes'
    when 3
      x['wday'] = 'Miercoles'
    when 4
      x['wday'] = 'Jueves'
    when 5
      x['wday'] = 'Viernes'
    when 6
      x['wday'] = 'Sabado'
    end
  }
end
