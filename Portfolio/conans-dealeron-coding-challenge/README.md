# Conan's DealerOn Coding Test

## Note

To access the images from the dummy api for the gallery of the application, you must uncomment lines 121 & 122 in the index.js file. 

To deploy the application, use the previous directions in the Employers Notes to launch a local server listening on port 3000. This will then host your index.html file and the dummy api. 

---------- Employers Notes ---------
# Dummy Data API
Simple server exposing *dummy* data to build a sample app.

## Usage
Simply run

    npm install
    npm start

and access ``http://127.0.0.1:3000/data`` to get an array of data.

If you want to retrieve just a subset, specify the lower and upper limit as query parameters, for example:

    http://127.0.0.1:3000/data?_start=8&_end=12
