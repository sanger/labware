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

define(['./../views/RackView'], function(view) {

    var rackPresenter = function() {
        this.Racks = {};
    };

    /* Sample method to show creation of rack image with json dummy data
     * The section ID is currently set to tube_rack
     *
     *
     * Arguments
     * ---------
     *
     * Returns
     * -------
     * void
     */
    rackPresenter.prototype.DrawSampleRack = function() {

        var that = this;

        // Temporary flat file call until web service calls are possible
        d3.json("../components/labware/racks/scripts/tube_rack.json", function(error, jsonData) {

            // send the json data and container information to define the rack
            that.DrawRack("#tube_rack", jsonData);

            return true;
        });
    };

    rackPresenter.prototype.DrawRack = function(containerID, jsonData)
    {

        var rackView = new view();
        var container = this.GetContainer(containerID);
        this.Racks[jsonData.tube_rack.uuid] = jsonData.tube_rack;

        return rackView.DrawRack(container, jsonData);
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
    rackPresenter.prototype.GetContainer = function(containerID) {
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return rackPresenter;

});
