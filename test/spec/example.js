define(['tubes/scripts/presenters/tube_presenter', 'plates/scripts/presenters/plate_presenter'], function(TubePresenter, Plate96Presenter) {
  'use strict';

   describe("tubePresenter", function() {
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
});

