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
define(['labware/views/qia_cube_view',
    'labware/presenters/base_presenter'],
    function (View, BasePresenter) {
    'use strict';

    var qiaCubePresenter = function (owner, presenterFactory) {
        var tmpUrl = "http://localhost:8080/qiacube/";
        BasePresenter.call(this);
        this.presenterFactory = presenterFactory;
        this.owner = owner;
        this.init(View, tmpUrl);
        window.qiaPresenter = this;

        return this;
    };

    qiaCubePresenter.prototype = new BasePresenter();

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
    qiaCubePresenter.prototype.setupPresenter = function (jquerySelection) {
        this.setupPlaceholder(jquerySelection);
        this.setupView();
        this.renderView();

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
    qiaCubePresenter.prototype.renderView = function () {
        // Pass the update call down to the view
        this.currentView.renderView();

        return this;
    };

    /* Passes down to the view the call to initialise a select
     *  associated with the QiaCube
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
    qiaCubePresenter.prototype.initTubesList = function (listContainer) {
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
    qiaCubePresenter.prototype.displayTubes = function (tubesString) {

        var numTubes = parseInt(tubesString, 10);
        var tubesConfiguration = this.getTubeConfigurations(numTubes);

        this.currentView.setTubes(tubesConfiguration);

        return this;
    };

    /* Gets the tube configuration for the number of tubes to be displayed
     *
     *
     * Arguments
     * ---------
     * numTubes:    The number of tubes to display
     *
     *
     * Returns
     * -------
     * The tube configuration
     */
    qiaCubePresenter.prototype.getTubeConfigurations = function (numTubes) {
        var tubesConfiguration = [];

        switch (numTubes) {
            case 0:
                tubesConfiguration = [];
                break;
            case 2:
                tubesConfiguration = [1, 7];
                break;
            case 3:
                tubesConfiguration = [1, 9, 5];
                break;
            case 4:
                tubesConfiguration = [1, 2, 7, 8];
                break;
            case 5:
                tubesConfiguration = [1, 2, 5, 8, 9];
                break;
            case 6:
                tubesConfiguration = [1, 2, 3, 7, 8, 9];
                break;
            case 7:
                tubesConfiguration = [1, 2, 3, 6, 7, 9, 10];
                break;
            case 8:
                tubesConfiguration = [1, 2, 3, 4, 7, 8, 9, 10];
                break;
            case 9:
                tubesConfiguration = [1, 2, 3, 5, 6, 7, 9, 10, 11];
                break;
            case 10:
                tubesConfiguration = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
                break;
            case 12:
                tubesConfiguration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                break;

        }

        return tubesConfiguration;
    };

    return qiaCubePresenter;
});