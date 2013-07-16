define(['presenters/spin_column_presenter',
  'text!json_data/spin_column.json'
], function (SpinColumnPresenter, spinColumnJson) {
  'use strict';

  var drawSampleSpinColumn = function (spinColumn, container) {
    var spinColumnData = JSON.parse(spinColumnJson);

    spinColumn.setupPresenter(spinColumnData, container);

    return this;
  };

  var view = undefined;
  var presenter = undefined;
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

  describe("SpinColumnPresenter", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        presenter = new SpinColumnPresenter();
      });
      it('instantiates spin columns object', function () {
        expect(presenter).toBeDefined();
      });
      it('is of type spin column', function () {
        expect(presenter instanceof SpinColumnPresenter).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        presenter = new SpinColumnPresenter(owner);
        presenter.View = View;
        spyOn(presenter, 'setupView');
        presenter.updateModel(true);

      });
      it('Model is properly set', function () {
        expect(presenter.model).toBe(true);
      });
      it('Render view has been called', function () {
        expect(presenter.setupView).toHaveBeenCalled();
      });
    });

    describe("Setup Placeholder", function () {
      beforeEach(function () {
        presenter = new SpinColumnPresenter();
        presenter.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(presenter.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        presenter = new SpinColumnPresenter();
        presenter.setupView(true);
      });
      it('View is properly set', function () {
        expect(presenter.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        presenter = new SpinColumnPresenter();
        presenter.currentView = view;
      });
      it('Renders spin columns in the view', function () {
        presenter.renderView();
        expect(view.renderView).toHaveBeenCalled();
      });
      it('Releases the view as expected', function () {
        presenter.release();
        expect(view.release).toHaveBeenCalled();
      });
    });
  });
});

