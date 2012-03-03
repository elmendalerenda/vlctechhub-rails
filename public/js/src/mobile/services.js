App.Services = (function(lng, app, undefined) {

    var findEvents = function() {
        var year = new Date().getMonth() + 1;
        var month = new Date().getFullYear();
        lng.Service.get('/events/', {}, function(response) {
            drawEvents(response);
        });
    };

    var drawEvents = function(events){
        events = addIndexToEvents(events);
        
        console.log(events);
        
        for(var i=0; i < events.length; i++ ){
                events[i].image = '/images/laptop.png'
        }

        lng.App.events = events;

        var parameters = {
                container_id: app.View.index_container,
                template_id: app.View.index_template,
                data: events
            };
        lng.View.Template.List.create(parameters);

    };

    var addIndexToEvents = function(events){
        for(var i=0; i < events.length; i++ ){
            events[i].index = i;
        }
        return events;
    };

    return {
        findEvents: findEvents
    }

})(LUNGO, App);
