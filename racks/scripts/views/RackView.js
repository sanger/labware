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

define([], function() {

    var rackView = function() { };

    /* Draws the test tube in the given container space
     *
     *
     * Arguments
     * ---------
     * container:    The selected d3 element
     *
     * jsonData:     The received json object data for the tube
     *
     *
     * Returns
     * -------
     * void
     */
    rackView.prototype.DrawRack = function(container, jsonData) {

        var parent = this;

        // Store the rack data from the json object in a hash with the uuid as a unique identifier
        var newRack = jsonData.tube_rack;

        // Read in the base svg data of the rack using D3
        d3.xml("../components/labware/racks/images/rack.svg", "image/svg+xml", function(xml){

            // Store the xml data in an object
            var importedNode = document.importNode(xml.documentElement, true);

            // Append the svn image data the chosen section placeholder     
            container.node().appendChild(importedNode);


            // If the rack tubes have aliquots then display the rack as filled
            for (var tube in newRack.tubes) {
                if (!is_empty(newRack.tubes[tube])) {
                    parent.FillTube(container, tube);
                }
            }
        });

        return newRack.uuid;
    };

    /* Modifies the rack tube in the defined HTML section container to display as full
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
    rackView.prototype.FillTube = function(container, tube) {

        // Selects the svg element and changes the display property to show a liquid in the well
        container.select("svg #" + tube).style("fill", "lime");
    };

    return rackView;

});