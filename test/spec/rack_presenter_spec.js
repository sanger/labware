define(['presenters/rack_presenter',
  'text!json_data/tube_rack.json'], function (RackPresenter, rackJson) {
  'use strict';

  var drawSampleRack = function (rack, container) {
    var rackData = JSON.parse(rackJson);

    rack.setupPresenter(rackData, container);

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

  describe("RackPresenter", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        presenter = new RackPresenter();
      });
      it('instantiates tube racks object', function () {
        expect(presenter).toBeDefined();
      });
      it('is of type tube rack', function () {
        expect(presenter instanceof RackPresenter).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        presenter = new RackPresenter(owner);
//        configureSpyView();
        presenter.View = View;
        spyOn(presenter, 'renderView');
        presenter.updateModel(true);
      });
      it('Render view has been called', function () {
        expect(presenter.renderView).toHaveBeenCalled();
      });
    });

    describe("Setup Placeholder", function () {
      beforeEach(function () {
        presenter = new RackPresenter();
        presenter.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(presenter.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        presenter = new RackPresenter();
        presenter.setupView(true);
      });
      it('View is properly set', function () {
        expect(presenter.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        presenter = new RackPresenter();
        presenter.currentView = view;
      });
      it('Renders tube racks in the view', function () {
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

