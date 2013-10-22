define(['plugins/http', 'durandal/app', 'knockout', 'spInfo', 'spInfoTest'], function (http, app, ko, spInfo, spInfoTest) {
    var that;
    var observable = require('plugins/observable');
    //var spInfo2 = require("spInfo");
    //alert(spInfo.siteURL)

    //Object that describes a filter 
    function _FilterInfo (selectedField, comparisonOperation, filter) {
        this.SelectedField = observable();
        this.ComparisonOperation = observable();
        this.Filter = observable();
        //alert(this.SelectedField());
    };


    var ctor = function () {
        that = this;
        this.displayName = 'Welcome to the SharePoint CAML Generator!';
        this.description = 'The SharePoint CAML Generator generates CAML examles in jquery, javascript, client object model and server object model.';
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
        this.spInfo = spInfo;
        spInfo.filterFields = ko.observableArray();

        //Setup observables to support data binding
        observable(spInfo, 'selectedList').subscribe(function (value) {
            getFieldData();  
        });

        observable(spInfo, 'siteURL').subscribe(function (value) {
            init();
        });

        //Initialize
        init();
    }; //end ctor

    this.init = function () {
        spInfo.useExampleCode = false;
        spInfo.listWebServiceUrl = spInfo.siteURL + "/_vti_bin/lists.asmx"
        getListData();

        // Run the highlighter: http://www.atlantacodefactory.com/blog/?p=34
        /*
        $('#abcd').click(function () {
            SyntaxHighlighter.all();
            alert()
        });
        */

    };


    this.AddFilter = function () {
        //spInfo.filterFields.push(function () { });
        spInfo.filterFields.push(new _FilterInfo('', '', ''));
        //alert(spInfo.filterFields()[spInfo.filterFields().length - 1].SelectedField);
        //spInfo.filterFields[spInfo.filterFields.length - 1].SelectedField = ko.observable('');
        //spInfo.filterFields[spInfo.filterFields.length - 1].ComparisonOperation = ko.observable('');
        //spInfo.filterFields[spInfo.filterFields.length - 1].Filter = ko.observable('');
        //alert('len1:' + spInfo.filterFields().length);
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
    this.getListData = function() {
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
            url: spInfo.listWebServiceUrl,
            type: "POST",
            dataType: "xml",
            data: soapEnv,
            complete: function (xData) {
                lists = ko.observableArray();
                var result = '';
                $(xData.responseText).find("\\List").each(function () {
                    lists.push(new spInfo.SPListInfo($(this).attr("Title")));
                });
                spInfo.availableLists = lists;
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
            url: spInfo.listWebServiceUrl,
            type: "POST",
            dataType: "xml",
            data: soapEnv,
            complete: function (xData) {
                listFields = ko.observableArray();
                var result = '';
                $(xData.responseText).find("Field").each(function () {
                    if ($(this).attr("Name") != "hidden" && $(this).attr("DisplayName"))
                        listFields.push(new spInfo.SPFieldInfo($(this).attr("Name"), $(this).attr("DisplayName")));
                });
                spInfo.availableFields = listFields;
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

