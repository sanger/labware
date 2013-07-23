define(['controllers/tube_controller',
  'text!json_data/tube.json',
  'text!json_data/tube_empty.json']
  , function (TubeController, tubeJson, tubeEmptyJson) {
  'use strict';

  var view = undefined;
  var controller = undefined;
  var owner = undefined;

  function drawSampleTubes(tube, container1, container2) {
    var tubeData = JSON.parse(tubeJson);
    var tubeEmptyData = JSON.parse(tubeEmptyJson);

    tube.setupController(tubeJson, container1);

    return tube;
  }

  function drawWasteTube(tube, jquerySelection) {
    tube.setupPlaceholder(jquerySelection);
    tube.setupView();
    tube.currentView.drawWasteTube();
  }

  function getAliquotType(tube) {
    var type = '';

    if (tube.model && tube.model.hasOwnProperty('tube')) {
      if (tube.model.tube.aliquots.length > 0) {
        type = tube.model.tube.aliquots[0].type;
      }
    }

    return type;
  }


  function configureMockOwner() {
    owner = {};

    owner.childDone = function (child, action, data) {

    };

    spyOn(owner, 'childDone');
  }

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

  describe("TubeController", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        controller = new TubeController();
      });
      it('instantiates tubes object', function () {
        expect(controller).toBeDefined();
      });
      it('is of type tube', function () {
        expect(controller instanceof TubeController).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        controller = new TubeController(owner);
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
        controller = new TubeController();
        controller.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(controller.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        controller = new TubeController();
        controller.setupView(true);
      });
      it('View is properly set', function () {
        expect(controller.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        controller = new TubeController();
        controller.currentView = view;
      });
      it('Renders tubes in the view', function () {
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

