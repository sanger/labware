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

define(['labware/views/tube_view',
    'text!labware/json_data/tube.json',
    'text!labware/json_data/tube_empty.json',
    'labware/presenters/base_presenter'],
    function(View, tubeJson, tubeEmptyJson, BasePresenter) {
    'use strict';

    var tubePresenter = function (owner, presenterFactory) {
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.owner = owner;
        this.init(View);

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

        this.setupView(container1);

        // send the json data and container information to define the tube
        this.renderView(tubeData);

        this.setupView(container2);

        // send the json data and container information to define the tube
        this.renderView(tubeEmptyData);

        return this;
    };

    return tubePresenter;
});