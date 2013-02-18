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

define([], function() {
    
    var tubeView = function() {};
    

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
    tubeView.prototype.drawTestTube = function(container, jsonData) {
    
    var volumeText = "-";
    var barcodeText = "N/A";
    var parent = this;
    
    // Store the tube data from the json object in a hash with the uuid as a unique identifier
    var newTube = jsonData.tube;
    
    // Read in the base svg data of the test tube using D3
    d3.xml("../images/tube_final3.svg", "image/svg+xml", function(xml){
        
        // Store the xml data in an object
        var importedNode = document.importNode(xml.documentElement, true);
        
        // Append the svn image data the chosen section placeholder     
        container.node().appendChild(importedNode);
                    
        // If the tube has aliquots then display the tube as filled
        if (newTube.aliquots.length > 0) {
            
            // TODO: When we receive json with multiple aliquots this will have to be adapted to handle better
            var aliquot = newTube.aliquots[0];
            volumeText = aliquot.quantity + " " + aliquot.unit;
            parent.fillTube(container);
        }
        
        // Set the detail text of the tube in question
        container.select("svg #ID_Text tspan").text(newTube.uuid);
        container.select("svg #Volume_Text tspan").text(volumeText);
        container.select("svg #Barcode_Text tspan").text(barcodeText);
     });
     
     return newTube.uuid;
};

/* Modifies the tube in the defined HTML section container to display as full
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
tubeView.prototype.fillTube = function(container) {
    
    // Selects the svg element and changes the display property to show a liquid in the tube 
    container.select("svg #aliquot").style("display", "block");
};

return tubeView;

});
