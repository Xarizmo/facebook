import React from 'react';
import './Feed.scss'
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default Feed;