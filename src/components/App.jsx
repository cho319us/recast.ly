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
  // when the title of a VideoListEntry is clicked, that video is displayed in the player.
  onVideoListEntryTitleClick(newCurrentVideo) {
    this.setState({
      currentVideo: newCurrentVideo
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
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
