define(['labware/views/rack_view',
    'text!labware/json_data/tube_rack.json',
    'labware/presenters/base_presenter'],
    function (View, rackJson, BasePresenter) {
    'use strict';

    var rackPresenter = function (owner, presenterFactory) {
        var labType = "rack";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    rackPresenter.prototype = new BasePresenter();

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
    rackPresenter.prototype.drawSampleRack = function (container) {
        var rackData = JSON.parse(rackJson);

        this.setupPresenter(rackData, container);

        return this;
    };

    return rackPresenter;
});