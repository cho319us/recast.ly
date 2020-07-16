var searchYouTube = (options, callback = () => {}) => {
  // Use jQuery to send a GET request to the search endpoint.
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: 'GET',
    data: {
      key: options.key, // an authorized YouTube Browser API key
      q: options.query, // the string to search for
      maxResults: options.max || 5, // the maximum number of videos to get, which should default to 5
      type: 'video', // only retrieve video
      part: 'snippet', // specifies a comma-separated list of one or more search resource properties that the API response will include.
      videoEmbeddable: true, // only GET embeddable videos
    },
    success: function(data) {
      console.log("Succeeded to get videos", data.items); // data.items is an array of objects
      callback(data.items);
    },
    error: function(error) {
      console.error('Failed to get videos', error);
    }
  });
};

export default searchYouTube;
