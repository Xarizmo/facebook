import React from 'react';
import './Feed.scss'
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://avatars1.githubusercontent.com/u/26521717?s=460&u=da1c7b84ea5144274fdafc1f6be55a7a597ba07e&v=4'
        message='Wow this works'
        timestamp='This is a timestamp'
        username='Mike Po'
        image='https://code.org/shared/images/social-media/codeorg2019_social.png'
      />
      <Post
        profilePic='https://avatars1.githubusercontent.com/u/26521717?s=460&u=da1c7b84ea5144274fdafc1f6be55a7a597ba07e&v=4'
        message='Wow this works'
        timestamp='This is a timestamp'
        username='Mike Po'
        image='https://code.org/shared/images/social-media/codeorg2019_social.png'
      />
      <Post
        profilePic='https://avatars1.githubusercontent.com/u/26521717?s=460&u=da1c7b84ea5144274fdafc1f6be55a7a597ba07e&v=4'
        message='Wow this works'
        timestamp='This is a timestamp'
        username='Mike Po'
      />

    </div>
  );
}

export default Feed;