define(['labware/views/waste_tube_view',
  'labware/presenters/base_presenter'],
  function (View, BasePresenter) {
    'use strict';

    var tubePresenter = function (owner, presenterFactory) {
      var labType = "wasteTube";
      BasePresenter.call(this);
      this.presenterFactory = presenterFactory;
      this.init(owner, View, labType);

      return this;
    };

    tubePresenter.prototype = new BasePresenter();

    /* Sets up the presenter
     *
     *
     * Arguments
     * ---------
     * jquerySelection: The jQuery selection for the view
     *
     *
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.setupPresenter = function (inputModel, jquerySelection) {
      this.setupPlaceholder(jquerySelection);
      this.setupView();
      this.renderView();

      return this;
    };

    tubePresenter.prototype.getAliquotType = function () {
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