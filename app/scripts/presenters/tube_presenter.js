define(['labware/views/tube_view',
    'labware/presenters/base_presenter'],
    function(View, BasePresenter) {
    'use strict';

    var tubePresenter = function (owner, presenterFactory) {
        var labType = "tube";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    tubePresenter.prototype = new BasePresenter();


    return tubePresenter;
});