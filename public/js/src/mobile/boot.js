App.Boot = (function(lng, app, undefined) {

    var setIndexHeaderText = function(){
        var d=new Date();
        var month=new Array(12);
        month[0]="Enero";
        month[1]="Febrero";
        month[2]="Marzo";
        month[3]="Abril";
        month[4]="Mayo";
        month[5]="Junio";
        month[6]="Julio";
        month[7]="Agosto";
        month[8]="Septiembre";
        month[9]="Octubre";
        month[10]="Noviembre";
        month[11]="Diciembre";

        var head = lng.dom('#index-header span');
        head[0].innerHTML = "Eventos de " + month[d.getMonth()];
    };

    setIndexHeaderText();
    app.Services.findEvents();

})(LUNGO, App);
