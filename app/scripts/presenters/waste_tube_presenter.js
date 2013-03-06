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

define(['labware/views/waste_tube_view',
  'labware/presenters/base_presenter'],
  function (View, BasePresenter) {
    'use strict';

    var tubePresenter = function (owner, presenterFactory) {
      var tmpUrl = "http://localhost:8080/tube/";
      BasePresenter.call(this);
      this.presenterFactory = presenterFactory;
      this.init(owner, View, tmpUrl);

      return this;
    };

    tubePresenter.prototype = new BasePresenter();

    /* Sets up the presenter
     *
     *
     * Arguments
     * ---------
     * jquerySelection: The jQuery selection for the view
     *
     *
     * Returns
     * -------
     * this
     */
    tubePresenter.prototype.setupPresenter = function (inputModel, jquerySelection) {
      this.setupPlaceholder(jquerySelection);
      this.setupView();
      this.renderView();

      return this;
    };

    tubePresenter.prototype.getAliquotType = function () {
      var type = '';

      if (this.model && this.model.hasOwnProperty('tube')) {
        if (this.model.tube.aliquots.length > 0) {
          type = this.model.tube.aliquots[0].type;
        }
      }

      return type;
    }

    return tubePresenter;
  });