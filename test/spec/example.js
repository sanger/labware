define(['controllers/tube_controller', 'controllers/plate_controller', 'controllers/rack_controller', 'controllers/spin_column_controller'], function(TubeController, Plate96Controller, RackController, SpinColumnController) {
  'use strict';

   describe("TubeController", function() {
      describe("default constructor", function(){
         it('instantiates tubes object', function(){
           var controller = new TubeController();
           expect(controller).toBeDefined();
          });
          it('is of type tube', function(){
              var controller = new TubeController();
              expect(controller instanceof TubeController).toBeTruthy();
          });
      });
  });

  describe("Plate96Controller", function(){
    describe("default constructor", function(){
      it('instantiates plate object', function(){
        var plate96 = new Plate96Controller();
        expect(plate96).toBeDefined();
      });
    });
  });

  describe("RackController", function(){
    describe("default constructor", function(){
      it('instantiates rack object', function(){
        var rack = new RackController();
        expect(rack).toBeDefined();
      });
    });
  });

  describe("SpinColumnController", function(){
    describe("default constructor", function(){
      it('instantiates spin column object', function(){
        var SpinColumn = new SpinColumnController();
        expect(SpinColumn).toBeDefined();
      });
    });
  });


});

