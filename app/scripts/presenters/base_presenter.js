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
define(['config','mapper/s2_root', 'mapper/s2_tube_resource', 'mapper/s2_resource_factory'], function (config, S2Root, s2Tube, S2Factory) {

  var basePresenter = function () {
    this.currentView = undefined;
    this.model = undefined;
    this.owner = undefined;
  };

  basePresenter.prototype.init = function (owner, view, labwareType) {
    this.View = view;
    this.labwareType = labwareType;
    this.owner = owner;
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
  basePresenter.prototype.setupView = function () {
    this.currentView = new this.View(this, this.jquerySelection);
    this.currentView.model = this.model;

    return this;
  };

  /* Sets up the presenter
   *
   *
   * Arguments
   * ---------
   * inputModel:      The model for the presenter
   *
   * jquerySelection: The jQuery selection for the view
   *
   *
   * Returns
   * -------
   * this
   */
  basePresenter.prototype.setupPresenter = function (inputModel, jquerySelection) {
    this.setupPlaceholder(jquerySelection);
    this.setupView();
    this.renderView();

    this.updateModel(inputModel);

    return this;
  };

  /* Updates the model to be used with the presenter
   *
   *
   * Arguments
   * ---------
   * inputModel:    The model for the presenter
   *
   *
   * Returns
   * -------
   * this
   */
  basePresenter.prototype.updateModel = function (inputModel) {
    this.model = inputModel;
    this.setupView();
    this.renderView();
    this.owner.childDone(this, this.labwareType + ' rendered', inputModel);

    return this;
  };

  /* Sets up the placeholder to be used with the presenter
   *
   *
   * Arguments
   * ---------
   * jquerySelection:    The selection for the presenter
   *
   *
   * Returns
   * -------
   * this
   */
  basePresenter.prototype.setupPlaceholder = function (jquerySelection) {
    this.jquerySelection = jquerySelection;

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
  basePresenter.prototype.renderView = function () {
    // Pass the update call down to the view
    this.currentView.renderView();

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