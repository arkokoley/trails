# Trails
A WebExtension for Tracking your own Digital Trail.

This extension tracks the websites you visit and then tracks which other websites/hosts are sent requests during your normal web browsing.

# Installation

1. Clone this repo or download as a zip and unzip.

To add to Chrome: 

1. Open the Extension Management page by navigating to `chrome://extensions`. The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select the extension directory.

To add to Firefox: 

[![How to Install in Firefox](http://img.youtube.com/vi/cer9EUKegG4/0.jpg)](http://www.youtube.com/watch?v=cer9EUKegG4 "Install in Firefox")


## Install Kibana

We use Kibana on Docker to analyse the data collected through Trails.
To install:

1. `docker pull docker.elastic.co/elasticsearch/elasticsearch:6.4.1`
2. `docker pull docker.elastic.co/kibana/kibana:6.4.1`
3. `docker network create elk`
4. `docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node"
   --name elasticsearch --net elk
   docker.elastic.co/elasticsearch/elasticsearch:6.4.1`
5. `docker run -d -p 5601:5601 -e "discovery.type=single-node" --name kibana
   --net elk docker.elastic.co/kibana/kibana:6.4.1`

---------------------------------------------


<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
