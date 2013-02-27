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
define(['text!labware/../images/96_plate.svg', 'text!labware/../images/384_plate.svg'], function (plate96Svg, plate384Svg) {
    'use strict';

    var plateView = function (owner, jquerySelection) {
        this.owner = owner;
        this.container = jquerySelection;

        return this;
    };


    /* Draws the plate in the given container space
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
    plateView.prototype.renderView = function (data) {
        // Store the spin column data from the json object in a hash with the uuid as a unique identifier
        var newPlate = data.plate;

        // Count the number of wells on the plate to determine its type
        var count = this.countWells(newPlate.wells);
        var plateSvg = {};

        if (count === 384) {
            plateSvg = plate384Svg;
        } else {
            plateSvg = plate96Svg;
        }

        // Parse the SVG xml data for the spin column image
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(plateSvg, "image/svg+xml");

        // Store the xml data in an object
        var importedNode = document.importNode(xmlDoc.documentElement, true);

        // Append the svn image data the chosen section placeholder     
        this.container.append(importedNode);

        // If the plate wells have aliquots then display the plate as filled
        for (var well in newPlate.wells) {
            if (newPlate.wells[well].length > 0) {
                this.fillWell(well);
            }
        }

        return newPlate.uuid;
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
    plateView.prototype.release = function () {
        this.container.empty();
    };

    /* Counts the number of wells on the plate to determine its type
     *
     *
     * Arguments
     * ---------
     * 
     * wells:    The collection of wells to be counted
     * 
     * 
     * Returns
     * -------
     * the number of wells
     */
    plateView.prototype.countWells = function (wells) {
        var count = 0;

        for (var well in wells) {
            count++;
        }

        return count;
    };

    /* Modifies the plate well in the defined HTML section container to display as full
     *
     *
     * Arguments
     * ---------
     * container:    The selected d3 element
     * 
     * 
     * Returns
     * -------
     * void
     */
    plateView.prototype.fillWell = function (well) {
    
        // Selects the svg element and changes the display property to show a liquid in the well 
        this.container.find("svg #" + well).css("fill", "lime");
    };

    return plateView;

});