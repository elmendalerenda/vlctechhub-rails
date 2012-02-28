App.Services = (function(lng, app, undefined) {

    var server_url = 'http://localhost:4567/';

    var lastMonthEvents = function() {
            var year = new Date().getMonth() + 1;
            var month = new Date().getFullYear();
            lng.Service.get(server_url + 'event/', {}, function(response) {
                var events = response.body;
            });
        };

    var events = [
    {name: 'Coding Dojo', description: 'Un coding dojo es una reunion que blablabla'}
    ];

    var parameters = {
            container_id: 'event-list',
            template_id: 'event-tmp',
            data: events
        };
    lng.View.Template.List.create(parameters);



    return {

    }

})(LUNGO, App);
