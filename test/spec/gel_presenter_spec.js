define(['presenters/gel_presenter'], function (GelPresenter) {
  'use strict';

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

  describe("GelPresenter", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        presenter = new GelPresenter();
      });
      it('instantiates gels object', function () {
        expect(presenter).toBeDefined();
      });
      it('is of type gel', function () {
        expect(presenter instanceof GelPresenter).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        presenter = new GelPresenter(owner);
//        configureSpyView();
        presenter.View = View;
        spyOn(presenter, 'renderView');
        presenter.updateModel(true);

      });
      it('Model is properly set', function () {
        expect(presenter.model).toBe(true);
      });
      it('Render view has been called', function () {
        expect(presenter.renderView).toHaveBeenCalled();
      });
    });

    describe("Setup Placeholder", function () {
      beforeEach(function () {
        presenter = new GelPresenter();
        presenter.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(presenter.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        presenter = new GelPresenter();
        presenter.setupView(true);
      });
      it('View is properly set', function () {
        expect(presenter.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        presenter = new GelPresenter();
        presenter.currentView = view;
      });
      it('Renders gels in the view', function () {
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

