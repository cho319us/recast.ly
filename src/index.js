// import App component from the transplied file - App.js instead of App.jsx
import App from './components/App.js';
// import the Youtube API Key
import YOUTUBE_API_KEY from './config/youtube.js';
// import the API helper function
import searchYouTube from './lib/searchYouTube.js';

// Render the `App` component to the DOM
ReactDOM.render(<App searchYouTube={searchYouTube} youtubeAPIKey={YOUTUBE_API_KEY}/>, document.getElementById("app"));