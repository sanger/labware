define(['labware/views/plate_view',
    'text!labware/json_data/plate96_2.json',
    'text!labware/json_data/plate384_1.json',
    'labware/presenters/base_presenter'],
    function(View, plate96Json, plate384Json, BasePresenter) {
    'use strict';

    var platePresenter = function (owner, presenterFactory) {
        var labType = "plate";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    platePresenter.prototype = new BasePresenter();

    /* Sample method to show creation of spin column image with json dummy data
     * The section ID is currently set to spincolumn
     *
     *
     * Arguments
     * ---------
     * container:    The selected d3 element
     *
     *
     * Returns
     * -------
     * this
     */
    platePresenter.prototype.drawSamplePlate = function (container1, container2) {
        var plate96Data = JSON.parse(plate96Json);
        var plate384Data = JSON.parse(plate384Json);

        this.setupPresenter(plate96Data, container1);

        return this;
    };

    return platePresenter;
});