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
define(['text!labware/../images/tube_final4.svg'], function (tubeSvg) {
    'use strict';

    var tubeView = function (owner, jquerySelection) {
        this.owner = owner;
        this.container = jquerySelection;

        return this;
    };


    /* Draws the test tube in the given container space
     *
     *
     * Arguments
     * ---------
     * data:    The tube data object
     *
     *
     * Returns
     * -------
     * The tube uuid
     */
    tubeView.prototype.renderView = function (data) {
        var volumeText = "-";
        var barcodeText = "N/A";
        var typeText = "-";

        // Store the tube data from the json object in a hash with the uuid as a unique identifier
        var newTube = data.tube;

        // Parse the SVG xml data for the plate image
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(tubeSvg, "image/svg+xml");

        // Store the xml data in an object
        var importedNode = document.importNode(xmlDoc.documentElement, true);

        // Append the svn image data the chosen section placeholder     
        this.container.append(importedNode);

        // If the tube has aliquots then display the tube as filled
        if (newTube.aliquots.length > 0) {

            // TODO: When we receive json with multiple aliquots this will have to be adapted to handle better
            var aliquot = newTube.aliquots[0];
            volumeText = aliquot.quantity + " " + aliquot.unit;
            typeText = aliquot.type;
            this.fillTube(aliquot.type);
        }

        // Set the detail text of the tube in question
        this.container.find("svg #ID_Text tspan").text(newTube.uuid);
        this.container.find("svg #Volume_Text tspan").text(volumeText);
        this.container.find("svg #Barcode_Text tspan").text(barcodeText);
        this.container.find("svg #Type_Text tspan").text(typeText);

        return newTube.uuid;
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
    tubeView.prototype.release = function () {
        this.container.empty();
    };

    /* Modifies the tube in the defined HTML section container to display as full
     *
     *
     * Arguments
     * ---------
     * 
     * Returns
     * -------
     * void
     */
    tubeView.prototype.fillTube = function (aliquotType) {
        // Selects the svg element and changes the display property to show a liquid in the tube 
        this.container.find("svg #aliquot").css("display", "block");
        // Change the liquid colour to match the variation in type
        this.container.find("svg #linearGradientAliquot").attr("xlink:href", "#Gradient_" + aliquotType);
    };

    return tubeView;

});