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

define(['text!labware/../images/rack.svg'], function (rackSvg) {
    'use strict';

    var rackView = function (owner, jquerySelection) {
        this.owner = owner;
        this.container = jquerySelection;
        this.model = undefined;

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
    rackView.prototype.renderView = function () {

        this.release();

        if (this.model && this.model.hasOwnProperty('tube_rack')) {

            // Store the spin column data from the json object in a hash with the uuid as a unique identifier
            var newRack = this.model.tube_rack;

            // Parse the SVG xml data for the spin column image
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(rackSvg, "image/svg+xml");

            // Store the xml data in an object
            var importedNode = document.importNode(xmlDoc.documentElement, true);

            // Append the svn image data the chosen section placeholder
            this.container().append(importedNode);

            // If the plate wells have aliquots then display the plate as filled
            for (var well in newRack.tubes) {
                this.fillWell(well);
            }
        }

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
    rackView.prototype.release = function () {
        this.container().empty();
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
        this.container().find("svg #" + well).css("fill", "lime");
    };

    return rackView;

});