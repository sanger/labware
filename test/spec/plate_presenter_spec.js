define(['presenters/plate_presenter'], function(PlatePresenter) {
  'use strict';

    var view = undefined;
    var presenter = undefined;

    function configureSpyView() {
        view = {};

        view.release = function() {
        };

        view.renderView = function(data) {
        };

        spyOn(view, 'release');
        spyOn(view, 'renderView');
    }

    describe("PlatePresenter", function() {
        describe("default constructor", function(){
            beforeEach(function(){
                presenter = new PlatePresenter();
            });
            it('instantiates plates object', function(){
                expect(presenter).toBeDefined();
            });
            it('is of type plate', function(){
                expect(presenter instanceof PlatePresenter).toBeTruthy();
            });
        });

        describe("UpdateModel", function(){
            beforeEach(function(){
                presenter = new PlatePresenter();
                configureSpyView();
                presenter.currentView = view;
                presenter.updateModel(true);

            });
            it('Model is properly set', function(){
                expect(presenter.model).toBe(true);
            });
            it('Render view has been called', function(){
                expect(view.renderView).toHaveBeenCalled();
            });
        });

        describe("Setup Placeholder", function(){
            beforeEach(function(){
                presenter = new PlatePresenter();
                presenter.setupPlaceholder(true);
            });
            it('View is properly set', function(){
                expect(presenter.jquerySelection).toBeDefined();
            });
        });

        describe("Setup View", function(){
            beforeEach(function(){
                presenter = new PlatePresenter();
                presenter.setupView(true);
            });
            it('View is properly set', function(){
                expect(presenter.currentView).toBeDefined();
            });
        });

        describe("View interaction", function(){
            beforeEach(function(){
                configureSpyView();
                presenter = new PlatePresenter();
                presenter.currentView = view;
            });
            it('Renders plates in the view', function(){
                presenter.renderView();
                expect(view.renderView).toHaveBeenCalled();
            });
            it('Releases the view as expected', function() {
                presenter.release();
                expect(view.release).toHaveBeenCalled();
            });
        });
  });
});

