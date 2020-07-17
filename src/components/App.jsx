import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

// Refactor App into a class component using ES6 classes
class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state of App to keep track of all the videos in the video list and the current video in the player.
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  // invoked immediately after a component is rendered to the DOM or is mounted
  componentDidMount() {
    // should load live data when app is initialized
    this.getSearchVideos('Music'); // set 'Music' as the default search string
  }

  // when the title of a VideoListEntry is clicked, that video is displayed in the player.
  onVideoListEntryTitleClick(newCurrentVideo) {
    this.setState({
      currentVideo: newCurrentVideo
    });
  }

  // when the user searched for a string, a list of string related videos is showed in video list and first video is displayed in the player
  getSearchVideos(string) {
    // defined a option to pass to the API helper function
    var option = {
      key: this.props.youtubeAPIKey,
      query: string
    };
    // call the API helper function send get request to the server
    this.props.searchYouTube(option, (videos) => {
      this.setState({
        allVideos: videos,
        currentVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search getSearchVideos={this.getSearchVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} onClick={this.onVideoListEntryTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
