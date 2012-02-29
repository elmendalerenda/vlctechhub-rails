App.Services = (function(lng, app, undefined) {

    var lastMonthEvents = function() {
/*            var year = new Date().getMonth() + 1;
            var month = new Date().getFullYear();
            lng.Service.get('/event/', {}, function(response) {
                var events = response.body;
            });
*/
        return [
                {name: 'Coding Dojo', icon:"beer", description: 'Un coding dojo es una reunion que blablabla'},
                {name: 'Agile Levante', icon:"meet", description: 'En AgileLevante hablamos de agilismo'}
        ];
    };

    var findEvents = function(){
        var events = lastMonthEvents();
        events = addIndexToEvents(events);

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
