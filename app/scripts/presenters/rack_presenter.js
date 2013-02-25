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
define(['../views/rack_view', 'text!../json_data/tube_rack.json'], function (View, rackJson) {
    'use strict';

    var rackPresenter = function (owner) {
        this.owner = owner;
        this.racks = {};
        this.currentView = {};

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
    rackPresenter.prototype.init = function (jquerySelection) {
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
    rackPresenter.prototype.drawSampleRack = function (container) {
        var rackData = JSON.parse(rackJson);

        this.init(container);

        // send the json data and container information to define the spin column
        this.update(rackData);

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
    rackPresenter.prototype.update = function (data) {
        // Pass the update call down to the view
        this.currentView.update(data);

        // Add to the collection of spin columns (still needed?)
        this.racks[data.tube_rack.uuid] = data;

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
    rackPresenter.prototype.release = function () {
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
    rackPresenter.prototype.childDone = function (childPtr, action, data) {
        return this;
    };

    /* Gets the HTML container given a string identifier
     *
     *
     * Arguments
     * ---------
     * containerID:    The unique container ID string
     *
     * 
     * Returns
     * -------
     * The container element
     */
    rackPresenter.prototype.getContainer = function (containerID) {
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return rackPresenter;
});