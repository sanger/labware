define(['controllers/rack_controller',
  'text!json_data/tube_rack.json'], function (RackController, rackJson) {
  'use strict';

  var drawSampleRack = function (rack, container) {
    var rackData = JSON.parse(rackJson);

    rack.setupController(rackData, container);

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
    spyOn($, 'ajax');
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

  describe("RackController", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        controller = new RackController();
      });
      it('instantiates tube racks object', function () {
        expect(controller).toBeDefined();
      });
      it('is of type tube rack', function () {
        expect(controller instanceof RackController).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        controller = new RackController(owner);
        controller.View = View;
        spyOn(controller, 'setupView');
        controller.updateModel(true);
      });
      it('Render view has been called', function () {
        expect(controller.setupView).toHaveBeenCalled();
      });
    });

    describe("Setup Placeholder", function () {
      beforeEach(function () {
        controller = new RackController();
        controller.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(controller.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        controller = new RackController();
        controller.setupView(true);
      });
      it('View is properly set', function () {
        expect(controller.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        controller = new RackController();
        controller.currentView = view;
      });
      it('Renders tube racks in the view', function () {
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

