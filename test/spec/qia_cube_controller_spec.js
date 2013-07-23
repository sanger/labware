define(['controllers/qia_cube_controller'], function (QiaCubeController) {
  'use strict';

  var view = undefined;
  var controller = undefined;
  var owner = undefined;

  function configureSpyView() {
    view = {};

    view.release = function () {
    };

    view.renderView = function (data) {
    };

    view.initTubesList = function (container) {
    };

    spyOn(view, 'release');
    spyOn(view, 'renderView');
    spyOn(view, 'initTubesList');
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

  describe("QiaCubeController", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        controller = new QiaCubeController();
      });
      it('instantiates qia cubes object', function () {
        expect(controller).toBeDefined();
      });
      it('is of type qia cube', function () {
        expect(controller instanceof QiaCubeController).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        controller = new QiaCubeController(owner);
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
        controller = new QiaCubeController();
        controller.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(controller.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        controller = new QiaCubeController();
        controller.setupView(true);
      });
      it('View is properly set', function () {
        expect(controller.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        controller = new QiaCubeController();
        controller.currentView = view;
      });
      it('Renders qia cubes in the view', function () {
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

