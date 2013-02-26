####################################################################
# Script to change all the indexes for 384 well plate svg
####################################################################

try:
	import xml.etree.ElementTree as ET
	print("Running with lxml etree")
except ImportError:
	print ("Import failed")
	
import os

# this is to get a relative path
dir = os.path.dirname(__file__)

filename = os.path.join(dir, '/images/384plate.svg')
	
letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]
numbers = [str(i) for i in range(1,25)]

# Open the file: check it opens!
try:
	tree = ET.parse("/Users/da6/projects/labware/plates/images/384plate.svg")
except IOError:
	print ("File not opened successfully")
	
root = tree.getroot()

print root.tag

# counter used to set appropriate index
count = 0;

# Get to the right part of the xml tree
for child in root:
	if child.attrib == {'{http://www.inkscape.org/namespaces/inkscape}label': 'Top', 'style': 'display:inline', '{http://www.inkscape.org/namespaces/inkscape}groupmode': 'layer', 'transform': 'translate(0.477709,0.086427)', 'id': 'layer4'}:		
		for i in child:
			if "path" in i.attrib['id']:
				#Set the appropriate index for the path element
				i.attrib['id'] = letters[count % 16] + numbers[count//16]
				count += 1
				print i.attrib['id']
				
# Write to file
tree.write("new384plate.svg")
				
				
				
				