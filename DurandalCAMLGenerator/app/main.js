requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        //,'spInfo': '../app/modules/spInfo'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define('spInfo', function () {
    var changed = 0;
    var useExampleCode = false;
    var siteURL = "http://SomeSharePointSite";
    var selectedList;
    var viewFields;
    var filterFields;
    var availableLists;
    var availableFields;
    var listWebServiceUrl = "test";
    var booleanOperator;

    booleanOperations = new Array(
        { Operator: 'And' },
        { Operator: 'Or' }
    );

    comparisonOperations = new Array(
        { Operator: 'BeginsWith' },
        { Operator: 'Contains' }
        );

    //Object that describes a list 
    function _SPListInfo (title) {
        this.Title = title;
    };

    //Object that describes a field 
    function _SPFieldInfo(name, displayName) {
        this.Name = name;
        this.DisplayName = displayName;
    };

    //Object that describes a filter 
    function _FilterInfo(selectedField, comparisonOperation, filter) {
        this.SelectedField = selectedField;
        this.ComparisonOperation = comparisonOperation;
        this.Filter = filter;
    };

    var _cleanseTemplateHtml = function (id) {
        var html = $('#' + id).html();
        var cleansedHtml = html;
        if (cleansedHtml) {
            cleansedHtml = cleansedHtml.replace(/data-bind="[\s\S]*?"/g, "");    //Remove knockout bindings 
            cleansedHtml = cleansedHtml.replace(/<!--[\s\S]*?ko [\s\S]*?-->/g, "");    //Remove knockout virtual bindings 
            cleansedHtml = cleansedHtml.replace(/&lt;/g, "<");    //replace &lt; with <
            cleansedHtml = cleansedHtml.replace(/&gt;/g, ">");    //replace &gt; with >
        }
        return cleansedHtml;
    };

    return {
        siteURL: siteURL,
        selectedList: selectedList,
        viewFields: viewFields,
        filterFields: filterFields,
        availableLists: availableLists,
        availableFields: availableFields,
        listWebServiceUrl: listWebServiceUrl,
        booleanOperator: booleanOperator,
        SPListInfo: _SPListInfo,
        SPFieldInfo: _SPFieldInfo,
        FilterInfo: _FilterInfo,
        comparisonOperations: comparisonOperations,
        booleanOperations: booleanOperations,
        CleanseTemplateHtml: _cleanseTemplateHtml,
        useExampleCode: useExampleCode
    };
});

define('spInfoTest', function () {
    var changed = 0;
    var siteURL = "http://SomeSharePointSite";
    var selectedList;
    var viewFields;
    var filterFields;
    var availableLists;
    var availableFields;
    var listWebServiceUrl = "test";
    var booleanOperator;

    booleanOperations = new Array(
        { Operator: 'And' },
        { Operator: 'Or' }
    );

    comparisonOperations = new Array(
        { Operator: 'BeginsWith' },
        { Operator: 'Contains' }
        );

    //Object that describes a list 
    function _SPListInfo(title) {
        this.Title = title;
    };

    //Object that describes a field 
    function _SPFieldInfo(name, displayName) {
        this.Name = name;
        this.DisplayName = displayName;
    };

    //Object that describes a filter 
    function _FilterInfo(selectedField, comparisonOperation, filter) {
        this.SelectedField = selectedField;
        this.ComparisonOperation = comparisonOperation;
        this.Filter = filter;
    };

    var _cleanseTemplateHtml = function (id) {
        var html = $('#' + id).html();
        var cleansedHtml = html;
        if (cleansedHtml) {
            cleansedHtml = cleansedHtml.replace(/data-bind="[\s\S]*?"/g, "");    //Remove knockout bindings 
            cleansedHtml = cleansedHtml.replace(/<!--[\s\S]*?ko [\s\S]*?-->/g, "");    //Remove knockout virtual bindings 
            cleansedHtml = cleansedHtml.replace(/&lt;/g, "<");    //replace &lt; with <
            cleansedHtml = cleansedHtml.replace(/&gt;/g, ">");    //replace &gt; with >
        }
        return cleansedHtml;
    };

    return {
        siteURL: siteURL,
        selectedList: selectedList,
        viewFields: viewFields,
        filterFields: filterFields,
        availableLists: availableLists,
        availableFields: availableFields,
        listWebServiceUrl: listWebServiceUrl,
        booleanOperator: booleanOperator,
        SPListInfo: _SPListInfo,
        SPFieldInfo: _SPFieldInfo,
        FilterInfo: _FilterInfo,
        comparisonOperations: comparisonOperations,
        booleanOperations: booleanOperations,
        CleanseTemplateHtml: _cleanseTemplateHtml
    };
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true,
        observable: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');

    });
});