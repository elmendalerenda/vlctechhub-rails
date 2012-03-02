App.View = (function(lng, app, undefined) {

    var index_template = 'event-tmp';
    var detail_template = 'event-detail';
    var detail_container = 'details';
    var index_container = 'event-list';

    lng.View.Template.create(index_template, '<li data-event="{{index}}" class="event_tap grey">\
        <div class="onleft">\
            <div class="event-icon {{icon}} icon"></div>\
            <div class="onleft">\
                <small class="event-wday" >{{wday}}</small>\
                <small class="event-day">{{day}}</small>\
            </div>\
            <div class="event-title onleft">{{name}}</div>\
        </div>\
        <div class="onright"><span class="icon right"></span> </div>\
        </li>');

    lng.View.Template.create(detail_template,
        '<h1>\
            <img src="{{image}}" \>\
            {{organizer}}\
        </h1>\
        <ul>\
            <li>{{name}}</li>\
            <li>{{wday}} {{day}} {{time}}</li>\
            <li>{{location}} {{location_url}}</li>\
            <li>{{description}}</li><br/>\
            <li>Si quieres saber más: {{follow}}</li>\
        </ul>');

    return {
        index_template: index_template,
        index_container: index_container,
        detail_template: detail_template,
        detail_container: detail_container
    }

})(LUNGO, App);
