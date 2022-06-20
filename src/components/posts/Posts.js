import React from 'react';
import styled from 'styled-components';


// h5 {
//   color: var(--Text-Secondary);
// }
// h6 {
//   color: var(--Accent-Light);
// }

// .post__body {
//   color: var(--Text-Primary);

//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 27px;
// }


const PostsContainer = styled.div`
 width: 50%;
 align-items: center;
 justify-content: center;
 margin: 0 auto;
 font-family: 'Open Sans';
`

const PostHeader = styled.div`
display: flex;
flex: row;
justify-content: space-between;
`
const PostFooter = styled.div`
display: flex;
flex: row;
justify-content: space-between;
font-size: 12px;
`

const PostCard = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
padding: 10px 20px 0px 20px;
background: var(--Primary-Light);
border-radius: 20px;
box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.06);
`


const Posts = () => {
  return (
    <PostsContainer>
      <h1>Posts</h1>
      {[1,2,3,4,5].map((item, idx) => (
          <PostCard key={idx}>
              <PostHeader>
              <h5>Post title</h5>
              <h6>Community</h6>
              </PostHeader>
              <p className='post__body'>
              This is an amazing postThis is an amazing postThis is an amazing postThis is an amazing postThis is an amazing postThis is an amazing postThis is an amazing post
              </p>
              <PostFooter><p>8:57 PM 6/19/2022</p><p>moath abu hamad</p></PostFooter>
          </PostCard>
      ))}
    </PostsContainer>
  );
};

export default Posts;
