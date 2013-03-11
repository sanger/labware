/*
S2 - An open source lab information management systems (LIMS)
Copyright (C) 2013  Wellcome Trust Sanger Insitute

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 1, or (at your option)
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston MA  02110-1301 USA
*/

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