import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../post/post';
import Post2 from '../../post2/post2';
import Post3 from '../../post2/post3';
import Post4 from '../../post2/post4';
import Post5 from '../../post2/post5';
import Post6 from '../../post2/post6';
import './Posts.css';

export default function Posts() {
  return (
    <div className="posts">
      {/* Use Link components to create links to SinglePost */}
      <Link className='link' to="/singlepost">
        <Post3 />
      </Link>
      <Link className='link' to="/singlepost">
        <Post4 />
      </Link>
      <Link className='link' to="/singlepost">
        <Post2 />
      </Link>
      <Link className='link' to="/singlepost">
        <Post />
      </Link>
      <Link className='link' to="/singlepost">
        <Post5 />
      </Link>
      <Link className='link' to="/singlepost">
        <Post6 />
      </Link>
      {/* Add more links for other posts */}
    </div>
  );
}
