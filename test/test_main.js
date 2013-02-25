require.config({
  shim: {
  },

  baseUrl: '.',
  paths: {
    d3: 'components/d3',
    domReady: 'components/requirejs-domready/domReady',
    mapper: 'scripts/mapper',
    views: 'scripts/views',
    presenters: 'scripts/presenters',
    tubes: 'scripts/tubes',
    plates: 'scripts/plates',
    config: 'test_config',
    text: 'components/requirejs-text/text',
    spec: 'spec',
    json: 'json'
  }

});

require(['domReady!', 'spec/example'], function() {
  runJasmineTests();
  //window.setTimeout(runJasmineTests, 1000);
});

