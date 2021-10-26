/** @format */

import React from 'react';

// CSS & MUI-Icon/Components
import './Post.scss';
import { Avatar } from '@material-ui/core';

function Post(props) {
  const { imageUrl, avatar, username, caption } = props;

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__header--avatar"
          alt="User Avatar"
          src={avatar}
        />
        <h3 className="post__header--name">{username}</h3>
      </div>

      <div className="post__body">
        <img className="post__body--img" src={imageUrl} alt="Post Image" />
      </div>

      <div className="post__footer">
        <h4 className="post__footer--text">
          <span className="post__footer--username">{username}:</span> {caption}
        </h4>
      </div>
    </div>
  );
}

export default Post;
