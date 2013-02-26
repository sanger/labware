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

define(['../views/tube_view', 'text!../json_data/tube.json', 'text!../json_data/tube_empty.json'], function(View, tubeJson, tubeEmptyJson) {
    'use strict';

    var tubePresenter = function (owner, presenterFactory) {
        this.presenterFactory = presenterFactory;
        this.owner = owner;
        this.currentView = {};

        return this;
    };

    /* Sets up the model to be used with the presenter
     *
     *
     * Arguments
     * ---------
     * model:    The model for the presenter
     *
     *
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.setupModel = function (model) {
        this.model = model;
        return this;
    };

    /* Initialises the presenter and defines the view to be used
     *
     *
     * Arguments
     * ---------
     * container:    The selected jquery element
     *
     *
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.setupView = function (jquerySelection) {
        this.currentView = new View(this, jquerySelection);

        return this;
    };

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


    /* Draws the test tube in the given container space
     *
     *
     * Arguments
     * ---------
     * data:    tube data object
     *
     * 
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.renderView = function (data) {
        // Pass the update call down to the view
        this.currentView.renderView(data);

        return this;

    };

    /* Removes the image from the assigned view container
     *
     *
     * Arguments
     * ---------
     * 
     * 
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.release = function () {
        this.currentView.release();

        return this;
    };

    /* Placeholder for future functionality
     *
     *
     * Arguments
     * ---------
     * 
     * 
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.childDone = function (childPtr, action, data) {
        return this;
    };

    return tubePresenter;
});