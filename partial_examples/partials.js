/*
* Add templates below. Include data from the model with {{MODEL KEY}}
* Nest templates with {{PARTIAL NAME,MODEL KEY}}
* Parse templates with parse(PARTIAL NAME,MODEL)
*/
define([],function (){
    'use strict';

    var data = {
        transfers:  [
            {
                inputtube: {
                    number:1,
                    uuid: 1234,
                    contents: 'stuff'
                },
                outputtube: {
                    number:2,
                    uuid: 5678,
                    contents: 'more stuff'
                }
            },
            {
                inputtube: {
                    number:1,
                    uuid: 93435,
                    contents: 'stuff'
                },
                outputtube: {
                    number:2,
                    uuid: 5678,
                    contents: 'more stuff'
                }
            }
        ],
        orderno: 1234,
        orderdetails:   {
            name: 'stuff',
            number: 1234
        },
        kitdetails: {
            name: 'good kit'
        }
    };


    var templates =  {
        extraction_stage_6:
            '<div class="container">' +
            '<div class="row"><h1 class="span12">Binding complete for order {{orderno}}</h1></div>' +
            '<div class="row">{{order_details,orderdetails}}{{kit_details,kitdetails}}</div>' +
            '{{binding,transfers}}' +
            '<div class="row">{{cancel_order,null}}{{start_elution_loading,null}}</div>' +

            '</div>',
        binding:
            '<div class="row">' +
            '<div class="span2"></div>'+
            '<div class="span5 alert-success">{{input_tube,inputtube}}</div>' +
            '<div class="span5 alert-info">{{output_tube,outputtube}}</div>' +
            '</div>',
        input_tube:
            '<h3>Input tube</h3>' +
            '<br/>UUID:{{uuid}}' +
            '',
        output_tube:
            '<h3>Output tube</h3>' +
            '<br/>UUID:{{uuid}}' +
            '<br/>Contains:{{contents}}',
        order_details:
            '<div class="span6"><h2>Order details</h2>{{name}},{{number}}</div>',
        kit_details:
            '<div class="span6"><h2>Kit details</h2>{{name}}</div>',
        cancel_order:
            '<div class="span2 btn pull-left">Cancel Order</div>',
        start_elution_loading:
            '<div class="span2 btn pull-left">Start Elution Loading</div>'
    };

    function parse (templateName, model) {
        var r;
        return templates[templateName].replace(/{{([\w]*)}}/g,  function (outer,inner){
            return model[inner];
        })
            .replace(/{{([\w]*),([\w]*)}}/g,  function (outer,subtemplate,subdata){
                r = '';
                if(model[subdata] && model[subdata].length){
                    for (var d in model[subdata]){
                        r+= parse(subtemplate, model[subdata][d])
                    }
                } else {
                    r = parse (subtemplate, model[subdata]);
                }
                return r;
            });
    }

    $('body').html(parse('extraction_stage_6', data));
});