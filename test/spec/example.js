define(['presenters/tube_presenter', 'presenters/plate_presenter', 'presenters/rack_presenter', 'presenters/spin_column_presenter'], function(TubePresenter, Plate96Presenter, RackPresenter, SpinColumnPresenter) {
  'use strict';

   describe("TubePresenter", function() {
      describe("default constructor", function(){
         it('instantiates tubes object', function(){
           var presenter = new TubePresenter();
           expect(presenter.Tubes).toBeDefined();
          });
      });
  });

  describe("Plate96Presenter", function(){
    describe("default constructor", function(){
      it('instantiates plate object', function(){
        var plate96 = new Plate96Presenter();
        expect(plate96.plates).toBeDefined();
      });
    });
  });

  describe("RackPresenter", function(){
    describe("default constructor", function(){
      it('instantiates rack object', function(){
        var rack = new RackPresenter();
        expect(rack).toBeDefined();
      });
    });
  });

  describe("SpinColumnPresenter", function(){
    describe("default constructor", function(){
      it('instantiates spin column object', function(){
        var SpinColumn = new SpinColumnPresenter();
        expect(SpinColumn).toBeDefined();
      });
    });
  });


});

