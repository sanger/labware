define(['labware/views/tube_view',
    'text!labware/json_data/tube.json',
    'text!labware/json_data/tube_empty.json',
    'labware/presenters/base_presenter'],
    function(View, tubeJson, tubeEmptyJson, BasePresenter) {
    'use strict';

    var tubePresenter = function (owner, presenterFactory) {
        var labType = "tube";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    tubePresenter.prototype = new BasePresenter();

    /* Sample method to show creation of test tube image with json dummy data
     * The section IDs are currently set to #tube1 and #tube2
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
    tubePresenter.prototype.drawSampleTubes = function (container1, container2) {
        var tubeData = JSON.parse(tubeJson);
        var tubeEmptyData = JSON.parse(tubeEmptyJson);

        this.setupPresenter(tubeJson, container1);

        return this;
    };

    tubePresenter.prototype.drawWasteTube = function(jquerySelection)
    {
      this.setupPlaceholder(jquerySelection);
      this.setupView();
      this.currentView.drawWasteTube();
    };

      tubePresenter.prototype.getAliquotType = function()
      {
        var type = '';

        if (this.model && this.model.hasOwnProperty('tube')) {
          if (this.model.tube.aliquots.length > 0) {
            type = this.model.tube.aliquots[0].type;
          }
        }

        return type;
      }

    return tubePresenter;
});