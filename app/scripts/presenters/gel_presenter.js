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
define(['labware/views/gel_view',
    'text!labware/json_data/gel_plate.json',
    'labware/presenters/base_presenter'],
    function (View, gelJson, BasePresenter) {
    'use strict';

    var gelPresenter = function (owner, presenterFactory) {
        var tmpUrl = "http://localhost:8080/gel/";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, tmpUrl);

        return this;
    };

    gelPresenter.prototype = new BasePresenter();

    /* Sample method to show creation of gel plate image with json dummy data
     * 
     *
     *
     * Arguments
     * ---------
     * container:    The selected jQuery element
     *
     *
     * Returns
     * -------
     * this
     */
    gelPresenter.prototype.drawSampleGel = function (container) {
        var gelData = JSON.parse(gelJson);

        this.setupPresenter(gelData, container);

        return this;
    };

    return gelPresenter;
});