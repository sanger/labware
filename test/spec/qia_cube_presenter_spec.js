define(['presenters/qia_cube_presenter'], function(QiaCubePresenter) {
  'use strict';

    var view = undefined;
    var presenter = undefined;

    function configureSpyView() {
        view = {};

        view.release = function() {
        };

        view.renderView = function(data) {
        };

        view.initTubesList = function(container) {
        };

        spyOn(view, 'release');
        spyOn(view, 'renderView');
        spyOn(view, 'initTubesList');
    }

    describe("QiaCubePresenter", function() {
        describe("default constructor", function(){
            beforeEach(function(){
                presenter = new QiaCubePresenter();
            });
            it('instantiates qia cubes object', function(){
                expect(presenter).toBeDefined();
            });
            it('is of type qia cube', function(){
                expect(presenter instanceof QiaCubePresenter).toBeTruthy();
            });
        });

        describe("Setup Model", function(){
            beforeEach(function(){
                presenter = new QiaCubePresenter();
                presenter.setupModel(true);
            });
            it('Model is properly set', function(){
                expect(presenter.model).toBe(true);
            });
        });

        describe("Setup View", function(){
            beforeEach(function(){
                presenter = new QiaCubePresenter();
                presenter.setupView(true);
            });
            it('View is properly set', function(){
                expect(presenter.currentView).toBeDefined();
            });
        });

        describe("View interaction", function(){
            beforeEach(function(){
                configureSpyView();
                presenter = new QiaCubePresenter();
                presenter.currentView = view;
            });
            it('Renders qia cubes in the view', function(){
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

