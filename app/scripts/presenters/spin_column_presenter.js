define(['labware/views/spin_column_view',
    'labware/presenters/base_presenter'],
    function(View, BasePresenter) {
    'use strict';

    var spinColumnPresenter = function (owner, presenterFactory) {
        var labType = "spinColumn";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);

        return this;
    };

    spinColumnPresenter.prototype = new BasePresenter();

    return spinColumnPresenter;
});