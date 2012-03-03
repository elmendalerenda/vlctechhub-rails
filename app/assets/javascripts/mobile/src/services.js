App.Services = (function(lng, app, undefined) {

    var findEvents = function() {
        var month = new Date().getMonth() + 1,
            year = new Date().getFullYear(),
            url = '/events/'+year+'/'+ month;
        
        lng.Service.get(url, {}, displayEvents);
    };

    var displayEvents = function(events){
        events = addIndexToEvents(events);
        
        lng.App.events = events;

        app.View.drawEventIndex(events);
    };

    var addIndexToEvents = function(events){
        for(var i=0; i < events.length; i++){
            events[i].index = i;
        }
        return events;
    };

    return {
        findEvents: findEvents
    }

})(LUNGO, App);
