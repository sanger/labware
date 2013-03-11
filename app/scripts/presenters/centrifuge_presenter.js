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
define(['labware/views/centrifuge_view',
    'labware/presenters/base_presenter'],
    function (View, BasePresenter) {
    'use strict';

    var centrifugePresenter = function (owner, presenterFactory) {
        var labType = "centrifuge";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.init(owner, View, labType);
        window.centrifugePresenter = this;

        return this;
    };

    centrifugePresenter.prototype = new BasePresenter();

    /* Sets up the presenter
     *
     *
     * Arguments
     * ---------
     * jquerySelection: The jQuery selection for the view
     *
     *
     * Returns
     * -------
     * this
     */
    centrifugePresenter.prototype.setupPresenter = function (jquerySelection) {
        this.setupPlaceholder(jquerySelection);
        this.setupView();
        this.renderView();

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
    centrifugePresenter.prototype.renderView = function () {

        // Pass the update call down to the view
        this.currentView.renderView();

        return this;
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