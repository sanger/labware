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
define(['labware/views/rack_view',
    'text!labware/json_data/tube_rack.json',
    'labware/presenters/base_presenter'],
    function (View, rackJson, BasePresenter) {
    'use strict';

    var rackPresenter = function (owner, presenterFactory) {
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.owner = owner;
        this.init(View);

        return this;
    };

    rackPresenter.prototype = new BasePresenter();

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
    rackPresenter.prototype.drawSampleRack = function (container) {
        var rackData = JSON.parse(rackJson);

        this.setupView(container);

        // send the json data and container information to define the spin column
        this.renderView(rackData);

        return this;
    };

    return rackPresenter;
});