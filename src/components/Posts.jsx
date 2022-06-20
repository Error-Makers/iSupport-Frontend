import React from 'react';
import styled from 'styled-components';

const PostsContainer = styled.div`
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: 'Open Sans';
`;

const PostHeader = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
`;
const PostFooter = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
  font-size: 12px;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px 20px 0px 20px;
  background: var(--Default-Light);
  border-radius: 20px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.06);
`;

const PostBody = styled.span`
  color: var(--Text-Primary);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
`;

const Posts = () => {
  return (
    <PostsContainer>
      <h1>Posts</h1>
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <PostCard key={idx}>
          <PostHeader>
            <p
              style={{
                color: 'var(--Text-Primary)',
                fontStyle: ' normal',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              Post title
            </p>
            <p
              style={{
                color: 'var(--Primary-Main)',
                fontStyle: ' normal',
                fontWeight: '400',
                fontSize: '16px',
              }}
            >
              {' '}
              Community
            </p>
          </PostHeader>
          <PostBody>
            This is an amazing postThis is an amazing postThis is an amazing
            postThis is an amazing postThis is an amazing postThis is an amazing
            postThis is an amazing post
          </PostBody>
          <PostFooter>
            <p>8:57 PM 6/19/2022</p>
            <p>moath abu hamad</p>
          </PostFooter>
        </PostCard>
      ))}
    </PostsContainer>
  );
};

export default Posts;
