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

define(['../views/plate_view', 'text!../plate96_2.json', 'text!../plate384_1.json'], function(view, plate96Json, plate384Json) {
    'use strict';
    
    var platePresenter = function(owner) {
        this.owner = owner;
        this.plates = {};
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
    platePresenter.prototype.init = function(jquerySelection) {
        'use strict';
    
        this.currentView = new view(this, jquerySelection);
        
        return this;
    };

    /* Sample method to show creation of spin column image with json dummy data
     * The section ID is currently set to spincolumn
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
    platePresenter.prototype.drawSamplePlate = function(container1, container2) {
        'use strict';
    
        var plate96Data = JSON.parse(plate96Json);
        var plate384Data = JSON.parse(plate384Json);
        
        this.init(container1);

        // send the json data and container information to define the spin column
        this.update(plate96Data);
        
        this.init(container2);

        // send the json data and container information to define the spin column
        this.update(plate384Data);

        return this;
    };
    

    /* Draws the spin column in the given container space
    *
    *
    * Arguments
    * ---------
    * data:    spin column data object
    *
    * 
    * Returns
    * -------
    * this
    */
    platePresenter.prototype.update = function(data) {
        'use strict';
    
        // Pass the update call down to the view
        this.currentView.update(data);
        
        // Add to the collection of spin columns (still needed?)
        this.plates[data.plate] = data;

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
    platePresenter.prototype.release = function() {
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
    platePresenter.prototype.childDone = function(childPtr, action, data) {
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
    platePresenter.prototype.getContainer = function(containerID) {
        'use strict';
    
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return platePresenter;
});
