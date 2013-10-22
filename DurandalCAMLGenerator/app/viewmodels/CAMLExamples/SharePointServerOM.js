define(['plugins/http', 'durandal/app', 'knockout', 'spInfoTest'], function (http, app, ko, spInfoTest) {
    var observable = require('plugins/observable');
    var ctor = function () {
        this.spInfoTest = spInfoTest;
        observable(spInfoTest, 'booleanOperator').subscribe(refresh);
        observable(spInfoTest, 'viewFields').subscribe(refresh);
        observable(spInfoTest, 'filterFields').subscribe(subscribeToFilters);
    }; //end ctor

    var subscribeToFilters = function () {
        for (var i = 0; i < spInfoTest.filterFields().length; i++) {
            observable(spInfoTest.filterFields()[i], 'SelectedField').subscribe(refresh);
            observable(spInfoTest.filterFields()[i], 'ComparisonOperation').subscribe(refresh);
            observable(spInfoTest.filterFields()[i], 'Filter').subscribe(refresh);

            refresh();
        }
    };

    var refresh = function () {
        //Cleanse generated code
        //alert('refresh');
        window.setTimeout(function () {
            $("#spserveromex").text(spInfoTest.CleanseTemplateHtml('spserveromexsrc'));
        }, 100)
    };
    return ctor;
});

