define([
       'labware/views/rack_view',
       'labware/presenters/base_presenter'
], function (View,  BasePresenter) {
  'use strict';

  var RackPresenter = function (owner, presenterFactory) {
    var labType = "rack";
    BasePresenter.call(this);
    this.presenterFactory = presenterFactory;
    this.init(owner, View, labType);

    return this;
  };

  RackPresenter.prototype = new BasePresenter();

  RackPresenter.prototype.fillWell = function (well, colour){
    this.currentView.fillWell(well,colour);
  };

  RackPresenter.prototype.resetWells = function (){
    this.currentView.resetWells();
  };

  return RackPresenter;
});
