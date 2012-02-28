App.View = (function(lng, app, undefined) {

    var index_template = 'event-tmp';
    var detail_template = 'event-detail';
    var detail_container = 'details';
    var index_container = 'event-list';

    lng.View.Template.create(index_template, '<li data-event="{{index}}"  class="event_tap">\
        <span class="onright">{{name}}</span>\
        <small>{{description}}</small>\
        </li>');
    
    lng.View.Template.create(detail_template, '<span>Name:</span> <span>{{name}}</span><br/>  \
        <span>Description:</span> <span>{{descripcion}}</span><br/>');

    return {
        index_template: index_template,
        index_container: index_container,
        detail_template: detail_template,
        detail_container: detail_container
    }

})(LUNGO, App);
