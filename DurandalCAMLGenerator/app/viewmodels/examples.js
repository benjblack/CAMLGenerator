define(['plugins/http', 'durandal/app', 'knockout', 'spInfoTest'], function (http, app, ko, spInfoTest) {
    var that;
    var observable = require('plugins/observable');
    //var spInfo2 = require("spInfo");
    //alert(spInfoTest.siteURL)

    //Object that describes a filter 
    function _FilterInfo(selectedField, comparisonOperation, filter) {
        this.SelectedField = observable();
        this.ComparisonOperation = observable();
        this.Filter = observable();
        //alert(this.SelectedField());
    };


    var ctor = function () {
        that = this;
        this.displayName = 'Welcome to the SharePoint CAML Generator!';
        this.description = 'The SharePoint CAML Generator generates CAML examples in jQuery, javascript client object model, .NET client object model and server object model.';
        this.features = [
            'Clean MV* Architecture',
            'JS & HTML Modularity',
            'Simple App Lifecycle',
            'Eventing, Modals, Message Boxes, etc.',
            'Navigation & Screen State Management',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS',
            'Integrates with other libraries such as SammyJS & Bootstrap',
            'Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets).'
        ];
        this.spInfoTest = spInfoTest;

        //Setup observables to support data binding
        observable(spInfoTest, 'selectedList').subscribe(function (value) {
            //getFieldData();
        });

        observable(spInfoTest, 'siteURL').subscribe(function (value) {
            init();
        });

        //Initialize
        //init();

        spInfoTest.siteURL = "http://my.sharepointsite.com";
        spInfoTest.filterFields = ko.observableArray();

        spInfoTest.availableLists = ko.observableArray();
        spInfoTest.availableLists.push(new spInfoTest.SPListInfo("List1"));
        spInfoTest.availableLists.push(new spInfoTest.SPListInfo("List2"));

        //spInfoTest.selectedList = new spInfoTest.SPListInfo("List1");

        spInfoTest.availableFields = ko.observableArray();
        spInfoTest.availableFields.push(new spInfoTest.SPFieldInfo("FieldInternalName", "Field Display Name"));
        spInfoTest.availableFields.push(new spInfoTest.SPFieldInfo("FieldInternalName2", "Field Display Name 2"));
        spInfoTest.availableFields.push(new spInfoTest.SPFieldInfo("FieldInternalName3", "Field Display Name 3"));

        //spInfoTest.viewFields = ko.observableArray();
        //spInfoTest.viewFields()[0] = spInfoTest.availableFields()[0];
        //spInfoTest.viewFields()[0] = spInfoTest.availableFields()[1];

        /*
        spInfoTest.filterFields = ko.observableArray();
        spInfoTest.filterFields().push(new _FilterInfo('', '', 'filter value 1'));
        spInfoTest.filterFields().push(new _FilterInfo('', '', 'filter value 2'));
        */

        spInfoTest.booleanOperator = { Operator: 'And' };


    }; //end ctor

    this.init = function () {

        // Run the highlighter: http://www.atlantacodefactory.com/blog/?p=34
        /*
        $('#abcd').click(function () {
            SyntaxHighlighter.all();
            alert()
        });
        */

    };


    this.AddFilter = function () {
        //spInfoTest.filterFields.push(function () { });
        spInfoTest.filterFields.push(new _FilterInfo('', '', ''));
        //alert(spInfoTest.filterFields()[spInfoTest.filterFields().length - 1].SelectedField);
        //spInfoTest.filterFields[spInfoTest.filterFields.length - 1].SelectedField = ko.observable('');
        //spInfoTest.filterFields[spInfoTest.filterFields.length - 1].ComparisonOperation = ko.observable('');
        //spInfoTest.filterFields[spInfoTest.filterFields.length - 1].Filter = ko.observable('');
        //alert('len1:' + spInfoTest.filterFields().length);
    };

    this.DisplayTemplateResult = function (element) {
        //alert($('#example').html())
        var htm = $('#example').find('div:first-child').html();
        $("#jqueryex").text(htm)
        //$(element).button(); // Turns the element into a jQuery UI button
    }

    this.attachedtest = function () {
        alert("View Attached");
    };

    //Load Lists drop-down
    this.getListData = function () {
        // --------------------------------------------------------------------------------------------
        // Get items from the 'Service Catalog' list and load them into the autocomplete control.
        // --------------------------------------------------------------------------------------------
        var soapEnv =
            "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'> \
		            <soapenv:Body> \
		                 <GetListCollection xmlns='http://schemas.microsoft.com/sharepoint/soap/'> \
		                 	<rowLimit>0</rowLimit> \
		                </GetListCollection> \
		            </soapenv:Body> \
		        </soapenv:Envelope>";

        jQuery.support.cors = true; // force cross-site scripting
        $.ajax({
            url: spInfoTest.listWebServiceUrl,
            type: "POST",
            dataType: "xml",
            data: soapEnv,
            complete: function (xData) {
                lists = ko.observableArray();
                var result = '';
                $(xData.responseText).find("\\List").each(function () {
                    lists.push(new spInfoTest.SPListInfo($(this).attr("Title")));
                });
                spInfoTest.availableLists = lists;
            },
            contentType: "text/xml; charset=\"utf-8\""
        });


    };

    //Load Fields drop-down
    this.getFieldData = function () {
        selectedList = $('#lists').find(":selected").text();

        // --------------------------------------------------------------------------------------------
        // Get items from the 'Service Catalog' list and load them into the autocomplete control.
        // --------------------------------------------------------------------------------------------
        var soapEnv =
            "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'> \
		            <soapenv:Body> \
		                 <GetList xmlns='http://schemas.microsoft.com/sharepoint/soap/'> \
		                    <listName>" + selectedList + "</listName> \
		                </GetList> \
		            </soapenv:Body> \
		        </soapenv:Envelope>";

        jQuery.support.cors = true; // force cross-site scripting
        $.ajax({
            url: spInfoTest.listWebServiceUrl,
            type: "POST",
            dataType: "xml",
            data: soapEnv,
            complete: function (xData) {
                listFields = ko.observableArray();
                var result = '';
                $(xData.responseText).find("Field").each(function () {
                    if ($(this).attr("Name") != "hidden" && $(this).attr("DisplayName"))
                        listFields.push(new spInfoTest.SPFieldInfo($(this).attr("Name"), $(this).attr("DisplayName")));
                });
                spInfoTest.availableFields = listFields;
            },
            contentType: "text/xml; charset=\"utf-8\""
        });
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});

