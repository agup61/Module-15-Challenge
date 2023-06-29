# Module-15-Challenge

The code in this repository represents my finished project where earthquake data is visualized using Leaflet. I have accomplished the task of creating a web-based map that displays earthquake locations and provides extra details when clicked. Furthermore, I have included an optional feature to display tectonic plate data and implemented controls to toggle different datasets on or off.

**Repository Setup**
To establish the repository for this project, I adhered to the following guidelines:

1. Generated a fresh repository named "leaflet-challenge".
2. Duplicated the repository onto my computer by performing a clone operation.

**Directory Structure**
Within the replicated repository, you will discover the subsequent arrangement of directories:

- Leaflet-Part-1: This directory encompasses the documents pertinent to Part 1 of the project, where I generated the visualization of earthquakes.
- Leaflet-Part-2: This directory accommodates the files associated with Part 2 of the project (optional), where I collected and plotted supplementary data (tectonic plates) on the map.

**Requirements**
In order to execute the code for the finished Leaflet Challenge, the following prerequisites must be met:

1. Web Browser: Ensure that you have a modern web browser installed on your computer, such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.
2. Internet Connection: Since the code fetches earthquake and tectonic plate data from external sources, an active internet connection is required to retrieve and display the data on the map.
3. Code Files: Ensure that you have access to the code files for the assignment, including HTML, JavaScript, and CSS files. The main entry points for running the application are the HTML files named index_Leaflet_Part_1.html and index_Leaflet_Part_2.html.
4. Leaflet Library: The code relies on the Leaflet library to create an interactive map and handle mapping functionalities. Make sure the Leaflet library is included in your project files.
5. GeoJSON Data: The code fetches earthquake data, and optionally tectonic plate data, in the GeoJSON format from external sources.
Once these requirements are met, you should be able to run the code by opening the main HTML file (index.html) in your web browser. The map and its associated functionalities should load, allowing you to explore the visualization of earthquake data and, if applicable, the overlay of tectonic plate data.

**Usage**

To access the completed assignment and explore the web map, please follow the steps outlined below:

Part 1: Earthquake Visualization

1. Obtain the earthquake dataset by visiting the USGS GeoJSON Feed page and selecting the desired dataset for visualization.
2. Retrieve the JSON representation of the data and use the provided URL to fetch the data for visualization.
3. To view the earthquake visualization:
- Open the Leaflet-Part-1 directory.
- Locate the main HTML file named index.html.
- Open index.html in a web browser.
- The map will display all the earthquakes from the dataset based on their longitude and latitude.
- The size of the data markers represents the magnitude of each earthquake, while the color indicates its depth.
- Additional information about each earthquake can be accessed by clicking on the associated marker, which triggers a popup.
- A legend is included to provide contextual information about the map data.

Part 2: Additional Data (Optional)
Please take note that Part 2 of the assignment is an optional challenge and does not provide any additional points.

In order to include a second dataset (tectonic plates) on the map, I followed these steps:

I obtained the tectonic plates data from the tectonicplates GitHub repository.
To view the updated map with both datasets plotted:
a. Open the Leaflet-Part-2 directory.
b. Locate the main HTML file named index.html.
c. Modify the code to import and visualize the tectonic plates dataset in conjunction with the earthquake data.
d. Open index.html in a web browser.
e. The map will now display the tectonic plates dataset in addition to the earthquake data.
f. Layer controls have been incorporated to allow toggling of different datasets on and off.

**Additional Notes**

This project uses Leaflet, HTML, and JavaScript. I made sure to include all the necessary files, including the main HTML file and any supporting JavaScript and CSS files, to run the analysis.

**References**
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
https://github.com/fraxen/tectonicplates

