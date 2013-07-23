require.config({
  shim: {
  },

  baseUrl: '.',
  paths: {
    domReady: 'components/requirejs-domready/domReady',
    views: 'scripts/views',
    controllers: 'scripts/controllers',
    images: 'images',
    config: 'test_config',
    text: 'components/requirejs-text/text',
    spec: 'spec',
    json_data: 'json_data',
    labware:'scripts'
  }

});

require(['domReady!',
    'spec/tube_controller_spec',
    'spec/plate_controller_spec',
    'spec/spin_column_controller_spec',
    'spec/qia_cube_controller_spec',
    'spec/rack_controller_spec',
    'spec/centrifuge_controller_spec',
    'spec/gel_controller_spec'],
    function() {
  runJasmineTests();
  //window.setTimeout(runJasmineTests, 1000);
});

