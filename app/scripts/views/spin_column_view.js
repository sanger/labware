define(['text!labware/../images/spin_column.svg'], function (spinColumnSvg) {
    'use strict';

    var spinColumnView = function (owner, jquerySelection) {
        this.owner = owner;
        this.container = jquerySelection;
        this.model = undefined;

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
    spinColumnView.prototype.renderView = function () {

        this.release();

//        if (this.model && this.model.hasOwnProperty('spin_columns')) {
//
//            // Store the spin column data from the json object in a hash with the uuid as a unique identifier
//            var newSpinColumn = this.model.spin_columns;

            // Parse the SVG xml data for the spin column image
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(spinColumnSvg, "image/svg+xml");

            // Store the xml data in an object
            var importedNode = document.importNode(xmlDoc.documentElement, true);

            // Append the svn image data the chosen section placeholder
            this.container().append(importedNode);
//        }

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
    spinColumnView.prototype.release = function () {
        this.container().empty();
    };

    return spinColumnView;

});