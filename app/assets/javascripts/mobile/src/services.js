App.Services = (function(lng, app, undefined) {

    var findEvents = function() {
        var now = new Date();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        var url = '/events/' + year + '/' + month;

        lng.Service.get(url, {}, _displayEvents);
    };

    var _displayEvents = function(events) {
        events = _addIndexToEvents(events);

        lng.Data.Cache.set('current_events', events);
        app.View.drawEventIndex(events);
    };

    var _addIndexToEvents = function(events) {
        for (var i = 0, len = events.length; i < len; i++) {
            events[i].index = i;
        };
        return events;
    };

    return {
        findEvents: findEvents
    }

})(LUNGO, App);
