define(['../views/TubeView'], function(view) {

    var tubePresenter = function() {
        this.Tubes = {};
    };

    /* Sample method to show creation of test tube image with json dummy data
     * The section IDs are currently set to #tube1 and #tube2
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

    tubePresenter.prototype.DrawSampleTubes = function() {

        var parent = this;

        // Temporary flat file call until web service calls are possible
        d3.json("./scripts/tube.json", function(error, jsonData) {

            // send the json data and container information to define the tube
            parent.DrawTube("#tube1", jsonData);
        });

        d3.json("./scripts/tube_empty.json", function(error, jsonData) {

            // send the json data and container information to define the tube
            parent.DrawTube("#tube2", jsonData);

        });

        return true;
    };

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
    tubePresenter.prototype.DrawTube = function(containerID, jsonData) {

        var tubeView = new view();
        var container = this.GetContainer(containerID);
        this.Tubes[jsonData.tube.uuid] = jsonData;

        return tubeView.drawTestTube(container, jsonData);

    };

/* Gets the HTML container given a string identifier
*
*
* Arguments
* ---------
* containerID:    The unique container ID string
*
* 
* Returns
* -------
* void
*/
    tubePresenter.prototype.GetContainer = function(containerID) {
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return tubePresenter;
});
