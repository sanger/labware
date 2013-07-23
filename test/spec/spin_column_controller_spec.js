define(['controllers/spin_column_controller',
  'text!json_data/spin_column.json'
], function (SpinColumnController, spinColumnJson) {
  'use strict';

  var drawSampleSpinColumn = function (spinColumn, container) {
    var spinColumnData = JSON.parse(spinColumnJson);

    spinColumn.setupController(spinColumnData, container);

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

  describe("SpinColumnController", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        controller = new SpinColumnController();
      });
      it('instantiates spin columns object', function () {
        expect(controller).toBeDefined();
      });
      it('is of type spin column', function () {
        expect(controller instanceof SpinColumnController).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        controller = new SpinColumnController(owner);
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
        controller = new SpinColumnController();
        controller.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(controller.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        controller = new SpinColumnController();
        controller.setupView(true);
      });
      it('View is properly set', function () {
        expect(controller.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        controller = new SpinColumnController();
        controller.currentView = view;
      });
      it('Renders spin columns in the view', function () {
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

