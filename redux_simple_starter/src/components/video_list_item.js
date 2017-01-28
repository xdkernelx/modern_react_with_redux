import React from 'react';

const VideoListItem = ({video}) => {
  // You can clean the following by adding
  // the field needed to modify in curly braces
  // and placing it on top.
  //const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;

  return  <li className="list-group-item">
            <div className="video-list media">
              <div className="media-left">
                <img className="media-object" src={imageUrl} />
              </div>

              <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
              </div>
            </div>
          </li>
};

export default VideoListItem;