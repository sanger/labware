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


/* Helper function which determines whether an object is empty
 *
 *
 * Arguments
 * ---------
 * obj: The object to be examined
 *
 *
 * Returns
 * -------
 * whether the object is empty or not (bool)
 */
function is_empty(obj) {

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length && obj.length > 0)    return false;
    if (obj.length && obj.length === 0)  return true;

    for (var key in obj) {
        if (hasOwnProperty.call(obj, key))    return false;
    }

    return true;
}

define(['text!../../images/rack.svg'], function (rackSvg) {
    'use strict';

    var rackView = function (owner, jquerySelection) {
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
    rackView.prototype.renderView = function (data) {
        // Store the spin column data from the json object in a hash with the uuid as a unique identifier
        var newRack = data.tube_rack;

        // Parse the SVG xml data for the spin column image
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(rackSvg, "image/svg+xml");

        // Store the xml data in an object
        var importedNode = document.importNode(xmlDoc.documentElement, true);

        // Append the svn image data the chosen section placeholder     
        this.container.append(importedNode);

        // If the plate wells have aliquots then display the plate as filled
        for (var well in newRack.tubes) {
            this.fillWell(well);
        }

        return newRack.uuid;
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
    rackView.prototype.release = function () {
        this.container.empty();
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
    rackView.prototype.fillWell = function (well) {
    
        // Selects the svg element and changes the display property to show a liquid in the well 
        this.container.find("svg #" + well).css("fill", "lime");
    };

    return rackView;

});