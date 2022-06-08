# Super-Mario-World-Map
Super Mario World theme for your Google Maps. Made using Google Cloud Platform and the Google Maps JavaScript API.

![Super Mario World Map Screenshot](https://github.com/vxm52/Super-Mario-World-Map/blob/master/extras/Screenshot.png?raw=true)


## Instructions
In order to run the program, you need your own Google Cloud Platform API key and a Google Maps custom Map ID. To get your API key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/project/_/google/maps-apis/overview).
2. Click the project drop-down and select this as the project for which you want to add an API key.
3. Click the menu button <img src="https://developers.google.com/maps/documentation/images/nav-menu.png" width=20px /> and select **Google Maps Platform**, then **Credentials**.
4. On the **Credentials** page, click **+ Create Credentials**, then **API key**.
The **API key created** dialog displays the newly created API key.
5. Click **Close**.
The new API key is listed on the **Credentials** page under **API Keys**.
(Remember to [restrict the API key](https://developers.google.com/maps/documentation/maps-static/get-api-key#restrict_key) before using it in production.)

Or visit [Google Maps Platform Documentation](https://developers.google.com/maps/documentation/maps-static/get-api-key) for more detailed instructions.
<br></br>
### Applying your API keys into the app:
- Add the API_KEY and MAP_ID in the `<script>` tag for the Maps API in the `index.html` file
- Add in the MAP_ID in the `script.js` file
<br></br>
## Next-steps for improvements
- Update default marker icons to Mario themed icons globally
  - Allows automatic custom marker generation regardless of location around the globe
- Add more marker icon types
