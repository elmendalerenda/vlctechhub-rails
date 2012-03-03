App.View = (function(lng, app, undefined) {

    var index_template = 'event-tmp';
    var detail_template = 'event-detail';
    var detail_container = 'details';
    var index_container = 'event-list';
    var detail_footer_container = 'detail_footer'
    var detail_footer_template = 'detail_footer_template'
    var detail_head_container = 'eventdetail .title'
    var detail_head_template = 'detail_head_template'

    lng.View.Template.create(index_template, '<li data-event="{{index}}" class="event_tap">\
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
            {{name}}\
        </h1>\
        <ul>\
            <li><span>Cuando: </span>{{wday}} {{day}} {{time}}</li>\
            <li><span>Donde: </span>{{location}}</li>\
            <li class="description">{{description}}</li>\
        </ul>');
    
    lng.View.Template.create(detail_footer_template,
        '<a class="button" href="{{location_url}}"><span class="icon map"></span></a>\
        <a class="button" href="{{follow}}"><span class="icon plus"></span></a>');
    
    lng.View.Template.create(detail_head_template,
        '{{organizer}}');
    
    var drawEventDetail = function(event){
        lng.View.Template.Binding.create(detail_head_container, detail_head_template, event);
        lng.View.Template.Binding.create(detail_container, detail_template, event);
        lng.View.Template.Binding.create(detail_footer_container, detail_footer_template, event);
    };

    return {
        index_template: index_template,
        index_container: index_container,
        drawEventDetail: drawEventDetail
    }

})(LUNGO, App);
