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
define(['text!../../images/spin_column.svg'], function (spinColumnSvg) {
    'use strict';

    var spinColumnView = function (owner, jquerySelection) {
        this.owner = owner;
        this.container = jquerySelection;

        return this;
    };


    /* Draws the spin column in the given container space
     *
     *
     * Arguments
     * ---------
     * data:    The spin column data object
     *
     *
     * Returns
     * -------
     * The spin column uuid
     */
    spinColumnView.prototype.renderView = function (data) {
        // Store the spin column data from the json object in a hash with the uuid as a unique identifier
        var newSpinColumn = data.spin_columns;

        // Parse the SVG xml data for the spin column image
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(spinColumnSvg, "image/svg+xml");

        // Store the xml data in an object
        var importedNode = document.importNode(xmlDoc.documentElement, true);

        // Append the svn image data the chosen section placeholder     
        this.container.append(importedNode);

        return newSpinColumn.uuid;
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
    spinColumnView.prototype.release = function () {
        this.container.empty();
    };

    return spinColumnView;

});