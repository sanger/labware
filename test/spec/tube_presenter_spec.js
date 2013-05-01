define(['presenters/tube_presenter',
  'text!json_data/tube.json',
  'text!json_data/tube_empty.json']
  , function (TubePresenter, tubeJson, tubeEmptyJson) {
  'use strict';

  var view = undefined;
  var presenter = undefined;
  var owner = undefined;

  function drawSampleTubes(tube, container1, container2) {
    var tubeData = JSON.parse(tubeJson);
    var tubeEmptyData = JSON.parse(tubeEmptyJson);

    tube.setupPresenter(tubeJson, container1);

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

  describe("TubePresenter", function () {
    describe("default constructor", function () {
      beforeEach(function () {
        presenter = new TubePresenter();
      });
      it('instantiates tubes object', function () {
        expect(presenter).toBeDefined();
      });
      it('is of type tube', function () {
        expect(presenter instanceof TubePresenter).toBeTruthy();
      });
    });

    describe("UpdateModel", function () {
      beforeEach(function () {
        configureMockOwner();
        presenter = new TubePresenter(owner);
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
        presenter = new TubePresenter();
        presenter.setupPlaceholder(true);
      });
      it('View is properly set', function () {
        expect(presenter.jquerySelection).toBeDefined();
      });
    });

    describe("Setup View", function () {
      beforeEach(function () {
        presenter = new TubePresenter();
        presenter.setupView(true);
      });
      it('View is properly set', function () {
        expect(presenter.currentView).toBeDefined();
      });
    });

    describe("View interaction", function () {
      beforeEach(function () {
        configureSpyView();
        presenter = new TubePresenter();
        presenter.currentView = view;
      });
      it('Renders tubes in the view', function () {
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

