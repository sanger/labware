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
define(['../views/centrifuge_view'], function (View) {
    'use strict';

    var centrifugePresenter = function (owner) {
        this.owner = owner;
        this.currentView = {};
        window.centrifugePresenter = this;

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
    centrifugePresenter.prototype.init = function (jquerySelection) {

        this.currentView = new View(this, jquerySelection);

        return this;
    };


    /* Draws the centrifuge in the given container space
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
    centrifugePresenter.prototype.update = function () {

        // Pass the update call down to the view
        this.currentView.update();

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
    centrifugePresenter.prototype.release = function () {

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
    centrifugePresenter.prototype.childDone = function (childPtr, action, data) {

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
    centrifugePresenter.prototype.getContainer = function (containerID) {

        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    /* Passes down to the view the call to initialise a select
     *  associated with the centrifuge
     *
     *
     * Arguments
     * ---------
     * listContainer:    The jQuery selection of the select object
     *
     * 
     * Returns
     * -------
     * this
     */
    centrifugePresenter.prototype.initTubesList = function (listContainer) {
        this.currentView.initTubesList(listContainer);

        return this;
    };

    /* Determines which tubes are displayed given the number to display
     *
     *
     * Arguments
     * ---------
     * tubesString:    The number of tubes to display in string format
     *
     * 
     * Returns
     * -------
     * this
     */
    centrifugePresenter.prototype.displayTubes = function (tubesString) {

        var numTubes = parseInt(tubesString, 10);

        switch (numTubes) {
            case 0:
                this.currentView.setTubes([]);
                break;
            case 2:
                this.currentView.setTubes([1, 2]);
                break;
            case 3:
                this.currentView.setTubes([1, 6, 9]);
                break;
            case 4:
                this.currentView.setTubes([1, 3, 2, 4]);
                break;
            case 5:
                this.currentView.setTubes([1, 3, 9, 4, 6]);
                break;
            case 6:
                this.currentView.setTubes([1, 3, 5, 2, 4, 6]);
                break;
            case 7:
                this.currentView.setTubes([1, 3, 5, 11, 2, 6, 8]);
                break;
            case 8:
                this.currentView.setTubes([1, 3, 5, 7, 2, 4, 6, 8]);
                break;
            case 9:
                this.currentView.setTubes([1, 3, 5, 9, 11, 2, 6, 8, 10]);
                break;
            case 10:
                this.currentView.setTubes([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
                break;
            case 12:
                this.currentView.setTubes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
                break;

        }

        return this;
    };

    return centrifugePresenter;
});