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

define(['../views/tube_view', 'text!../json_data/tube.json', 'text!../json_data/tube_empty.json'], function(view, tubeJson, tubeEmptyJson) {
    'use strict';
    
    var tubePresenter = function(owner) {
        this.owner = owner;
        this.Tubes = {};
        this.currentView = {};
        
        return this;
    };
    
    /* Initialises the presenter and defines the view to be used
     *
     *
     * Arguments
     * ---------
     * container:    The selected jquery element
     *
     *
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.init = function(jquerySelection) {
        'use strict';
    
        this.currentView = new view(this, jquerySelection);
        
        return this;
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
     * this
     */
    tubePresenter.prototype.drawSampleTubes = function(container1, container2) {
        'use strict';
    
        var tubeData = JSON.parse(tubeJson);
        var tubeEmptyData = JSON.parse(tubeEmptyJson);
        
        this.init(container1);

        // send the json data and container information to define the tube
        this.update(tubeData);
        
        this.init(container2);

        // send the json data and container information to define the tube
        this.update(tubeEmptyData);

        return this;
    };
    

    /* Draws the test tube in the given container space
    *
    *
    * Arguments
    * ---------
    * data:    tube data object
    *
    * 
    * Returns
    * -------
    * this
    */
    tubePresenter.prototype.update = function(data) {
        'use strict';
    
        // Pass the update call down to the view
        this.currentView.update(data);
        
        // Add to the collection of tubes (still needed?)
        this.Tubes[data.tube.uuid] = data;

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
    tubePresenter.prototype.release = function() {
        'use strict';
    
        this.currentView.release();
        
        return this;    
    };
    
    /* Placeholder for future functionality
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
    tubePresenter.prototype.childDone = function(childPtr, action, data) {
         'use strict';
    
         return this;
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
    * The container element
    */
    tubePresenter.prototype.getContainer = function(containerID) {
        'use strict';
    
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return tubePresenter;
});
