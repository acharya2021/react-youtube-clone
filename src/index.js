// React is used to create and manage our components
// import from the react folder/library in node_modules
import React, {Component} from 'react';
// ReactDOM is used to interact with the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import from the search_bar.js file that we created
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDZHsZGbvxFOJ9IWtiSeWlBYlmfj805XNc';


// Create a new component that produces html
// we are not going to reassign App. so make it a const
// App is a class, not an instance or component.
// It is a factory that produces instances
class App extends Component {

    constructor(props) {
        super(props);

        // videos is the name of the property
        // set the list of videos to an empty array
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    // kick off the request to get videos
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // console.log(data);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    // the html below is referred to as JSX
    // it is a subset/dialect of JS that allows us to write
    // what looks like HTML but is really JS
    // it gets turned into HTML by React
    render() {

        // throttled version of the function videoSearch
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                           videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page
// in the DOM
// pass an instance of the App class using <App />
// tell it where in the HTML document to render the component
ReactDOM.render(<App/>, document.querySelector('.container'));
