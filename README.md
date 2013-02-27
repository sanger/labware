labware
=======

A collection of HTML, CSS and images that can be used to represent laboratory equipment

In the data-main of the require.js start-up, the below shows the minimum config requirements to ensure the component runs as part of a Yeoman project. The component makes use of requirejs-text and needs both that and the baseUrl to be defined for relative paths.

```
require.config({
  shim: {
  },
    
  baseUrl: '.',
  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min',
    text: 'components/requirejs-text/text',
    labware: '<location of labware scripts directory>'
  }
});
```

Installation
=======

1. Ensure you have Yeoman and Bower installed. Pull labware down to an accessible folder. This should not be your application folder.
2. In terminal, navigate to the application and type:
```
yeoman init
```
Select the default options for all of the prompts (Just hit enter).
3. Once this has completed, navigate to the 'app' folder inside your Yeoman project and type:
```
bower install <labware download location>
```
This will install all of the dependencies required to run the application with labware. labware will now reside in the components folder inside the app directory.
4. In the main.js of the application (require.js entry point) ensure that the configuration contains at least the items mentioned above. You may need to change the reference to app.js in the code from 'app' to something more like 'scripts/app'.
5. Ensure d3 is referenced from any web pages created in the <head>