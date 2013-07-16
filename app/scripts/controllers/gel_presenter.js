define(['labware/views/gel_view',
    'labware/presenters/base_presenter'],
    function (View, BasePresenter) {
    'use strict';

    var gelPresenter = function (owner, presenterFactory) {
        var labType = "gel";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    gelPresenter.prototype = new BasePresenter();

    return gelPresenter;
});