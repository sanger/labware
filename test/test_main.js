require.config({
  shim: {
  },

  baseUrl: '.',
  paths: {
    domReady: 'components/requirejs-domready/domReady',
    views: 'scripts/views',
    presenters: 'scripts/presenters',
    images: 'images',
    config: 'test_config',
    text: 'components/requirejs-text/text',
    spec: 'spec',
    json_data: 'json_data',
    labware:'scripts'
  }

});

require(['domReady!',
    'spec/tube_presenter_spec',
    'spec/plate_presenter_spec',
    'spec/spin_column_presenter_spec',
    'spec/qia_cube_presenter_spec',
    'spec/rack_presenter_spec',
    'spec/centrifuge_presenter_spec',
    'spec/gel_presenter_spec'],
    function() {
  runJasmineTests();
  //window.setTimeout(runJasmineTests, 1000);
});

