define(['labware/views/plate_view',
    'labware/presenters/base_presenter'],
    function(View, BasePresenter) {
    'use strict';

    var platePresenter = function (owner, presenterFactory) {
        var labType = "plate";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    platePresenter.prototype = new BasePresenter();

    return platePresenter;
});