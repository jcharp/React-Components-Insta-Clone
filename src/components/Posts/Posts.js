import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  // console.log(props.post);
  // console.log(posts);

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
     {posts.map((item) => (
       <Post key= {item.id} post = {item}/>
     ))}
    </div>
  );
};

export default Posts;