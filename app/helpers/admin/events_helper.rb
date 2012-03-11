module Admin::EventsHelper
  def clone_year_to
    today = Date.today
    today.month < 12 ? today.year : toda.year + 1
  end

  def event_icon_select_options
    options_for_select([
      ['code', 'code'],
      ['meet', 'meet'],
      ['conf', 'conf'],
      ['beer', 'beer']
    ])
  end
end
