var tubes = {};

/* Sample method to show creation of test tube image with json dummy data
 * The section IDs are currently set to #tube1 and #tube2
*
*
* Arguments
* ---------
* container:    The selected d3 element
* 
* 
* Returns
* -------
* void
*/
function createSampleTubes() {
			// Temporary flat file call until web service calls are possible
		d3.json("./scripts/tube.json", function(error, jsonData) {
			
			// Selects the element to have the svg appended to it
			var element = d3.select("#tube1");
			
			// send the json data and container information to define the tube
			drawTestTube(element, jsonData);

		});
		
		d3.json("./scripts/tube_empty.json", function(error, jsonData) {
			
			// Selects the element to have the svg appended to it
			var element = d3.select("#tube2");
			
			// send the json data and container information to define the tube
			drawTestTube(element, jsonData);

		});
}

/* Draws the test tube in the given container space
*
*
* Arguments
* ---------
* container:    The selected d3 element
*
* jsonData:     The received json object data for the tube
*
* 
* Returns
* -------
* void
*/
function drawTestTube(container, jsonData) {
	
	var volumeText = "-";
	var barcodeText = "N/A";
	
	// Read in the base svg data of the test tube using D3
	d3.xml("../images/tube_final3.svg", "image/svg+xml", function(xml){
		
		// Store the xml data in an object
		var importedNode = document.importNode(xml.documentElement, true);
		
		// Append the svn image data the chosen section placeholder		
		container.node().appendChild(importedNode);
		
		// Store the tube data from the json object in a hash with the uuid as a unique identifier
		var newTube = jsonData.tube;
		tubes[newTube.uuid] = newTube;
			
		// If the tube has aliquots then display the tube as filled
		if (newTube.aliquots.length > 0) {
			
			// TODO: When we receive json with multiple aliquots this will have to be adapted to handle better
			var aliquot = newTube.aliquots[0];
			volumeText = aliquot.quantity + "ml";
		    fillTube(container);
		}
		
		// Set the detail text of the tube in question
		container.select("svg #ID_Text tspan").text(newTube.uuid); 	
		container.select("svg #Volume_Text tspan").text(volumeText);
		container.select("svg #Barcode_Text tspan").text(barcodeText);
     });
}

/* Modifies the tube in the defined HTML section container to display as full
*
*
* Arguments
* ---------
* container:    The selected d3 element
* 
* 
* Returns
* -------
* void
*/
function fillTube(container) {
	
	// Selects the svg element and changes the display property to show a liquid in the tube 
	container.select("svg #aliquot").style("display", "block");
}
