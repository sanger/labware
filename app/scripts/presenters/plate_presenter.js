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

define(['labware/views/plate_view',
    'text!labware/json_data/plate96_2.json',
    'text!labware/json_data/plate384_1.json',
    'labware/presenters/base_presenter'],
    function(View, plate96Json, plate384Json, BasePresenter) {
    'use strict';

    var platePresenter = function (owner, presenterFactory) {
        var tmpUrl = "http://localhost:8080/plate/";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.owner = owner;
        this.init(View, tmpUrl);

        return this;
    };

    platePresenter.prototype = new BasePresenter();

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
    platePresenter.prototype.drawSamplePlate = function (container1, container2) {
        var plate96Data = JSON.parse(plate96Json);
        var plate384Data = JSON.parse(plate384Json);

        this.setupPresenter(plate96Data, container1);

        return this;
    };

    return platePresenter;
});