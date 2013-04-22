define(['text!labware/../images/tube_final5.svg', 'text!labware/../images/waste_tube.svg'], function (tubeSvg, wasteTubeSvg) {
    'use strict';

    var tubeView = function (owner, jquerySelection) {
        this.owner = owner;
        this.container = jquerySelection;
        this.model = undefined;

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
    tubeView.prototype.renderView = function () {
        var volumeText = "-";
        var barcodeText = "N/A";
        var typeText = "-";

        this.drawTube(tubeSvg);

        if (this.model && this.model.hasOwnProperty('tube')) {

        // Store the tube data from the json object
          var newTube = this.model.tube;

          // Labels include the tube barcode and its uuid
          var labels = newTube.labels;
          barcodeText = labels.barcode.value;

            // If the tube has aliquots then display the tube as filled
            if (newTube.aliquots.length > 0) {

                // TODO: When we receive json with multiple aliquots this will have to be adapted to handle better
                var aliquot = newTube.aliquots[0];
                volumeText = aliquot.quantity + " " + aliquot.unit;
                typeText = aliquot.type;
                this.fillTube(aliquot.type);
            }

            // Set the detail text of the tube in question
            this.container().find("svg #Volume_Text").text('Volume: ' + volumeText);
            this.container().find("svg #Barcode_Text").text('Barcode: ' + barcodeText);
            this.container().find("svg #Type_Text").text('Type: ' + typeText);
        }

        return this;
    };

    tubeView.prototype.drawTube = function(inputSvg) {
      this.release();
      this.container().append(inputSvg);
    };

    tubeView.prototype.drawWasteTube = function() {
      this.drawTube(wasteTubeSvg);
      return this;
    }

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
        this.container().empty();
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
        this.container().find("svg #aliquot").css("display", "block");
        // Change the liquid colour to match the variation in type
        this.container().find("svg #linearGradientAliquot").attr("xlink:href", "#Tube_Gradient_" + aliquotType);
    };

    return tubeView;

});