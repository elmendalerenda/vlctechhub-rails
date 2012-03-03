App.Events = (function(lng, app, undefined) {

    // try when mobile
    //lng.dom('#details').swipeRight(function(event) {
    //    lng.Router.section('#hello_world');                                  
    //});
    
    lng.dom('.event_tap').tap(function(event) {
        var selectedIndex = event.currentTarget.getAttribute('data-event');
        var selectedEvent = lng.App.events[selectedIndex];
        
        app.View.drawEventDetail(selectedEvent);
        
        lng.Router.section('#eventdetail');
    });
    
    return {

    }

})(LUNGO, App);