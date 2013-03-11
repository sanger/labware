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
define(['text!labware/../images/waste_tube.svg'], function (wasteTubeSvg) {
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

    this.drawTube(wasteTubeSvg);
    return this;

    return this;
  };

  tubeView.prototype.drawTube = function (inputSvg) {

    this.release();

    // Parse the SVG xml data for the plate image
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(inputSvg, "image/svg+xml");

    // Store the xml data in an object
    var importedNode = document.importNode(xmlDoc.documentElement, true);

    // Append the svn image data the chosen section placeholder
    this.container().append(importedNode);
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
  tubeView.prototype.release = function () {
    this.container().empty();
  };

  return tubeView;

});