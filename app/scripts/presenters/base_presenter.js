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
define([], function () {

    var basePresenter = function() {
        this.currentView = {};
        this.model = {};
    };
    
    basePresenter.prototype.init = function(view) {
        this.View = view;
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
    basePresenter.prototype.setupView = function (jquerySelection) {
        this.currentView = new this.View(this, jquerySelection);
    
        return this;
    };
    
    /* Sets up the model to be used with the presenter
     *
     *
     * Arguments
     * ---------
     * model:    The model for the presenter
     *
     *
     * Returns
     * -------
     * this
     */
    basePresenter.prototype.setupModel = function (model) {
        this.model = model;
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
    basePresenter.prototype.renderView = function (data) {
        // Pass the update call down to the view
        this.currentView.renderView(data);
    
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
    basePresenter.prototype.release = function () {
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
    basePresenter.prototype.childDone = function (childPtr, action, data) {
        return this;
    };
    
    return basePresenter;
});