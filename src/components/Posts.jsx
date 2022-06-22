import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  color: var(--Accent-Main);
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px 20px 0px 20px;
  background: var(--Paper-Light);
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
const API = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  // 'https://jsonplaceholder.typicode.com/todos' just for test
  // GET	/community/:id/get-posts	Get All posts inside the community with :id=communityId
  let getPosts = async (id) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      `${API}/community/${id}/get-posts`,
      config,
    );
    // console.log('response', response);
    setPosts(response.data);
  };
  // //	/community/:id/create-post	Creates a New Post in a Joined Commuity :id=communityId
  // async function addPost(communityId, body) {
  //   await axios.post(`${API}+/community/${communityId}/create-post `, body);
  // }
  // // /update-post/:id	Search The Communities List and Update the Post with :id=postId
  // async function updatePost(postId, body) {
  //   await axios.patch(`${API}+/update-post/${postId} `, body);
  // }
  // // /community/:id/delete-post/:postId
  // // Deletes a Post By Community ID and Post ID
  // async function deletePost(id, postId) {
  //   await axios.delete(`${API}+/community/${id}/delete-post/${postId} `);
  // }
  useEffect(() => {
    getPosts(1);
  }, []);
  return (
    <>
      {posts && (
        <PostsContainer>
          <h1>Posts</h1>
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
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
                  {/* {item.post_title} */}
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
                postThis is an amazing postThis is an amazing postThis is an
                amazing postThis is an amazing post
                {/* {item.post_body} */}
              </PostBody>
              <PostFooter>
                <p>
                  8:57 PM 6/19/2022
                  {/* {item.createdAt} */}
                </p>
                <p>
                  moath abu hamad
                  {/* {item.author_name} */}
                </p>
              </PostFooter>
            </PostCard>
          ))}
        </PostsContainer>
      )}
    </>
  );
};
export default Posts;
