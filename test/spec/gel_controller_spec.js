define(['controllers/gel_controller',
  'text!json_data/gel_plate.json'], function (GelController, gelJson) {
  'use strict';

  var drawSampleGel = function (gelPlate, container) {
    var gelData = JSON.parse(gelJson);

    gelPlate.setupController(gelData, container);

    return this;
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

  describe("GelController", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        controller = new GelController();
      });
      it('instantiates gels object', function () {
        expect(controller).toBeDefined();
      });
      it('is of type gel', function () {
        expect(controller instanceof GelController).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        controller = new GelController(owner);
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
        controller = new GelController();
        controller.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(controller.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        controller = new GelController();
        controller.setupView(true);
      });
      it('View is properly set', function () {
        expect(controller.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        controller = new GelController();
        controller.currentView = view;
      });
      it('Renders gels in the view', function () {
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

