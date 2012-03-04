var App = (function(lng, undefined) {

    lng.App.init({
        name: 'vlctechhub',
        version: '1.0',
        events: null
    });

    var setIndexHeaderText = function(){
        var now = new Date();
        var months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ];

        var head = lng.dom('#index-header span').first();
        head.innerHTML = "VLCTechHub " + months[now.getMonth()];
    };

    return {
        setIndexHeaderText: setIndexHeaderText
    };

})(LUNGO);
