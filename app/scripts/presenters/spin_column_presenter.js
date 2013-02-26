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

define(['../views/spin_column_view', 'text!../json_data/spin_column.json'], function(view, spinColumnJson) {
    'use strict';

    var spinColumnPresenter = function (owner, presenterFactory) {
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
    spinColumnPresenter.prototype.setupModel = function (model) {
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
    spinColumnPresenter.prototype.setupView = function (jquerySelection) {
        this.currentView = new View(this, jquerySelection);

        return this;
    };

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

        this.setupView(container);

        // send the json data and container information to define the spin column
        this.renderView(spinColumnData);

        return this;
    };


    /* Draws the spin column in the given container space
     *
     *
     * Arguments
     * ---------
     * data:    spin column data object
     *
     * 
     * Returns
     * -------
     * this
     */
    spinColumnPresenter.prototype.renderView = function (data) {
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
    spinColumnPresenter.prototype.release = function () {
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
    spinColumnPresenter.prototype.childDone = function (childPtr, action, data) {
        return this;
    };

    return spinColumnPresenter;
});