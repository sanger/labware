define(['labware/views/rack_view',
    'labware/presenters/base_presenter'],
    function (View,  BasePresenter) {
    'use strict';

    var rackPresenter = function (owner, presenterFactory) {
        var labType = "rack";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    rackPresenter.prototype.fillWell = function (well, colour){
      this.currentView.fillWell(well,colour);
    };

    rackPresenter.prototype.resetWells = function (){
      this.currentView.resetWells();
    };

    rackPresenter.prototype = new BasePresenter();

    return rackPresenter;
});