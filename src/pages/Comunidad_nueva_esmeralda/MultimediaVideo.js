import React from 'react';
import ReactPlayer from 'react-player';

const MultimediaVideo = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginRight: '5rem', marginLeft: '5rem', marginBottom: '5rem' }}>
        <div style={{ width: '40%', height: '20rem' }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=d6JXul6JNL0" width="100%" height="100%" />
        </div>
        <div style={{ width: '40%', height: '20rem' }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=ltD49Fo9F9Y" width="100%" height="100%" />
        </div>
      </div>
    </>
  );
};

export default MultimediaVideo;
