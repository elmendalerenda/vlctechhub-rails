App.Events = (function(lng, app, undefined) {

    // try when mobile
    //lng.dom('#details').swipeRight(function(event) {
    //    lng.Router.section('#hello_world');                                  
    //});
    
    lng.dom('.event_tap').tap(function(event) {
        var selected = event.currentTarget.getAttribute('data-event');
        
        lng.View.Template.Binding.create(app.View.detail_container, app.View.detail_template, lng.App.events[selected]);
        
        lng.Router.section('#eventdetail');
    });
    
    return {

    }

})(LUNGO, App);