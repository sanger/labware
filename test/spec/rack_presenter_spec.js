define(['presenters/rack_presenter'], function(RackPresenter) {
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
        spyOn($, 'ajax');
    }

    describe("RackPresenter", function() {
        describe("default constructor", function(){
            beforeEach(function(){
                presenter = new RackPresenter();
            });
            it('instantiates tube racks object', function(){
                expect(presenter).toBeDefined();
            });
            it('is of type tube rack', function(){
                expect(presenter instanceof RackPresenter).toBeTruthy();
            });
        });

        describe("UpdateModel", function(){
            beforeEach(function(){
                presenter = new RackPresenter();
                configureSpyView();
                presenter.currentView = view;
                spyOn($, "ajax").andCallFake(function(params) {
                    params.success({"response" : true });
                });
                presenter.updateModel(true);


            });
            it('Model update calls ajax', function(){
                expect($.ajax).toHaveBeenCalled();
            });
            it('Render view has been called', function(){
                expect(view.renderView).toHaveBeenCalled();
            });
        });

        describe("Setup Placeholder", function(){
            beforeEach(function(){
                presenter = new RackPresenter();
                presenter.setupPlaceholder(true);
            });
            it('View is properly set', function(){
                expect(presenter.jquerySelection).toBeDefined();
            });
        });

        describe("Setup View", function(){
            beforeEach(function(){
                presenter = new RackPresenter();
                presenter.setupView(true);
            });
            it('View is properly set', function(){
                expect(presenter.currentView).toBeDefined();
            });
        });

        describe("View interaction", function(){
            beforeEach(function(){
                configureSpyView();
                presenter = new RackPresenter();
                presenter.currentView = view;
            });
            it('Renders tube racks in the view', function(){
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

