define(['labware/views/gel_view',
    'text!labware/json_data/gel_plate.json',
    'labware/presenters/base_presenter'],
    function (View, gelJson, BasePresenter) {
    'use strict';

    var gelPresenter = function (owner, presenterFactory) {
        var labType = "gel";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    gelPresenter.prototype = new BasePresenter();

    /* Sample method to show creation of gel plate image with json dummy data
     * 
     *
     *
     * Arguments
     * ---------
     * container:    The selected jQuery element
     *
     *
     * Returns
     * -------
     * this
     */
    gelPresenter.prototype.drawSampleGel = function (container) {
        var gelData = JSON.parse(gelJson);

        this.setupPresenter(gelData, container);

        return this;
    };

    return gelPresenter;
});