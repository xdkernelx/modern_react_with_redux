import React from 'react';

//props here is incoming arguments from a parent class
const VideoList = (props) => {
  return  <ul className="col-md-4 list-group">
            {props.videos.length}
          </ul>
}

export default VideoList;