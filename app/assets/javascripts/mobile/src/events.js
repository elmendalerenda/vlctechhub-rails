App.Events = (function(lng, app, undefined) {
    
    lng.dom('.event_tap').tap(function(event) {
        var selectedIndex = event.currentTarget.getAttribute('data-event');
        var selectedEvent = lng.App.events[selectedIndex];
        
        app.View.drawEventDetail(selectedEvent);
        
        lng.Router.section('#eventdetail');
    });
    
    return {

    }

})(LUNGO, App);