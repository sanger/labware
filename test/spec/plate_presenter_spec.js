define(['presenters/plate_presenter',
  'text!json_data/plate96_2.json',
  'text!json_data/plate384_1.json'], function (PlatePresenter, plate96Json, plate384Json) {
  'use strict';

  var drawSamplePlate = function (plate, container1, container2) {
    var plate96Data = JSON.parse(plate96Json);
    var plate384Data = JSON.parse(plate384Json);

    plate.setupPresenter(plate96Data, container1);

    return plate;
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

  describe("PlatePresenter", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        presenter = new PlatePresenter();
      });
      it('instantiates plates object', function () {
        expect(presenter).toBeDefined();
      });
      it('is of type plate', function () {
        expect(presenter instanceof PlatePresenter).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        presenter = new PlatePresenter(owner);
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
        presenter = new PlatePresenter();
        presenter.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(presenter.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        presenter = new PlatePresenter();
        presenter.setupView(true);
      });
      it('View is properly set', function () {
        expect(presenter.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        presenter = new PlatePresenter();
        presenter.currentView = view;
      });
      it('Renders plates in the view', function () {
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

