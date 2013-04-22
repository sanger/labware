define(['labware/views/spin_column_view',
    'text!labware/json_data/spin_column.json',
    'labware/presenters/base_presenter'],
    function(View, spinColumnJson, BasePresenter) {
    'use strict';

    var spinColumnPresenter = function (owner, presenterFactory) {
        var labType = "spinColumn";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    spinColumnPresenter.prototype = new BasePresenter();

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
    spinColumnPresenter.prototype.drawSampleSpinColumn = function (container) {
        var spinColumnData = JSON.parse(spinColumnJson);

        this.setupPresenter(spinColumnData, container);

        return this;
    };

    return spinColumnPresenter;
});