define(['plugins/http', 'durandal/app', 'knockout', 'spInfo'], function (http, app, ko, spInfo) {
    var observable = require('plugins/observable');
    var ctor = function () {
        this.spInfo = spInfo;
        observable(spInfo, 'booleanOperator').subscribe(refresh);
        observable(spInfo, 'viewFields').subscribe(refresh);
        observable(spInfo, 'filterFields').subscribe(subscribeToFilters);
    }; //end ctor

    var subscribeToFilters = function () {
        for (var i = 0; i < spInfo.filterFields().length; i++) {
            observable(spInfo.filterFields()[i], 'SelectedField').subscribe(refresh);
            observable(spInfo.filterFields()[i], 'ComparisonOperation').subscribe(refresh);
            observable(spInfo.filterFields()[i], 'Filter').subscribe(refresh);

            refresh();
        }
    };

    var refresh = function () {
        //Cleanse generated code
        //alert('refresh');
        window.setTimeout(function () {
            $("#spserveromex").text(spInfo.CleanseTemplateHtml('spserveromexsrc'));
        }, 100)
    };
    return ctor;
});

