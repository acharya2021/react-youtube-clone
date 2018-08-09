import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // array.map is an iterator just like a for loop
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}/>
    });

    return (
        <ul className="col-md-4 list0-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
