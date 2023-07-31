# Module_15-Leaflet_Challenge
This repository contains the code for my completed assignment of visualizing earthquake data using Leaflet. I have successfully created a web map that plots earthquakes on a map and provides additional information about each earthquake when clicked. Additionally, I have optionally plotted tectonic plate data and added layer controls to toggle different datasets on and off.

## Repository Setup
I followed the instructions below to set up the repository for this project:
1) Created a new repository called leaflet-challenge.
2) Cloned the repository to my computer.

## Directory Structure
Inside the cloned repository, you'll find the following directory structure:
* Leaflet-Part-1: This directory contains the files for Part 1 of the assignment, where I created the earthquake visualization.
* Leaflet-Part-2: This directory contains the files for Part 2 of the assignment (optional), where I gathered and plotted additional data (tectonic plates) on the map.

## Requirements
To run the code for the completed Leaflet Challenge, you will need the following requirements:
1) Web Browser: Ensure that you have a modern web browser installed on your computer, such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.
2) Internet Connection: Since the code fetches earthquake and tectonic plate data from external sources, you will need an active internet connection to retrieve and display the data on the map.
3) Code Files: Make sure you have access to the code files for the assignment. These files include HTML, JavaScript, and CSS files. The main HTML files, named index_Leaflet_Part_1.html and index_Leaflet_Part_2.html, is the entry point for running the application.
4) Leaflet Library: The code relies on the Leaflet library to create the interactive map and handle the mapping functionalities. Ensure that you have included the Leaflet library in your project files.
5) GeoJSON Data: The code fetches earthquake data and, optionally, tectonic plate data in GeoJSON format from external sources. 
Once you have met these requirements, you should be able to run the code by opening the main HTML file (index.html) in your web browser. The map and associated functionalities should load, allowing you to explore the earthquake data visualization and, if applicable, the tectonic plate data overlay.

## Usage
To view the completed assignment and explore the web map, follow these instructions:

### Part 1: Earthquake Visualization
1) I obtained the earthquake dataset by visiting the USGS GeoJSON Feed page and choosing a dataset to visualize.
2) I obtained the JSON representation of the data and used the URL to pull in the data for the visualization.
3) To view the earthquake visualization:
* Open the Leaflet-Part-1 directory.
* Locate the main HTML file named index.html.
* Open index.html in a web browser.
* The map will plot all the earthquakes from the dataset based on their longitude and latitude.
* The data markers reflect the magnitude of the earthquake by their size, and the depth of the earthquake by color.
* Popups provide additional information about each earthquake when the associated marker is clicked.
* A legend is included to provide context for the map data.

### Part 2: Additional Data (Optional)
Note: Part 2 is an optional challenge and does not earn extra points.
1) To plot a second dataset (tectonic plates) on the map, I needed to obtain the data from the tectonicplates GitHub repository.
2) To view the updated map with both datasets plotted:
* Open the Leaflet-Part-2 directory.
* Locate the main HTML file named index.html.
* Edit the code to import and visualize the tectonic plates dataset alongside the earthquake data.
* Open index.html in a web browser.
* The tectonic plates dataset will be displayed along with the earthquake data.
* Layer controls are added to toggle different datasets on and off.

## Additional Notes
This project uses Leaflet, HTML, and JavaScript.
I made sure to include all the necessary files, including the main HTML file and any supporting JavaScript and CSS files, to run the analysis.

## References
* https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
* https://github.com/fraxen/tectonicplates
