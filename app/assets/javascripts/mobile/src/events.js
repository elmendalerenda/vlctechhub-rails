App.Events = (function(lng, app, undefined) {


    $$(document).ready(function(event) {
        console.log('ready');
        app.setIndexHeaderText();
        app.Services.findEvents();
    });

    lng.dom('.event_tap').tap(function(event) {
        var selectedIndex = lng.dom(this).data('event');
        var currentEvents = lng.Data.Cache.get('current_events');
        var selectedEvent = currentEvents[selectedIndex];

        app.View.drawEventDetail(selectedEvent);

        lng.Router.section('#eventdetail');
    });

    return {

    }

})(LUNGO, App);
