define(['controllers/plate_controller',
  'text!json_data/plate96_2.json',
  'text!json_data/plate384_1.json'], function (PlateController, plate96Json, plate384Json) {
  'use strict';

  var drawSamplePlate = function (plate, container1, container2) {
    var plate96Data = JSON.parse(plate96Json);
    var plate384Data = JSON.parse(plate384Json);

    plate.setupController(plate96Data, container1);

    return plate;
  };


  var view = undefined;
  var controller = undefined;
  var owner = undefined;

  function configureSpyView() {
    view = {};

    view.release = function () {
    };

    view.renderView = function (data) {
    };

    spyOn(view, 'release');
    spyOn(view, 'renderView');
  }

  function View() {
  };

  View.prototype.release = function () {
  };

  View.prototype.renderView = function () {
  };

  function configureMockOwner() {
    owner = {};

    owner.childDone = function (child, action, data) {

    };

    spyOn(owner, 'childDone');
  }

  describe("PlateController", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        controller = new PlateController();
      });
      it('instantiates plates object', function () {
        expect(controller).toBeDefined();
      });
      it('is of type plate', function () {
        expect(controller instanceof PlateController).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        controller = new PlateController(owner);
        controller.View = View;
        spyOn(controller, 'setupView');
        controller.updateModel(true);

      });
      it('Model is properly set', function () {
        expect(controller.model).toBe(true);
      });
      it('Render view has been called', function () {
        expect(controller.setupView).toHaveBeenCalled();
      });
    });

    describe("Setup Placeholder", function () {
      beforeEach(function () {
        controller = new PlateController();
        controller.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(controller.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        controller = new PlateController();
        controller.setupView(true);
      });
      it('View is properly set', function () {
        expect(controller.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        controller = new PlateController();
        controller.currentView = view;
      });
      it('Renders plates in the view', function () {
        controller.renderView();
        expect(view.renderView).toHaveBeenCalled();
      });
      it('Releases the view as expected', function () {
        controller.release();
        expect(view.release).toHaveBeenCalled();
      });
    });
  });
});

