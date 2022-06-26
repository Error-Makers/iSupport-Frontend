import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import { device } from '../media';

function CreatePostModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postBodyRef = useRef();
  const postTitleRef = useRef();

  const handlePost = async (e) => {
    e.preventDefault();
    let body = {
      post_title: postTitleRef.current.value,
      post_body: postBodyRef.current.value,
    };
    handleClose();
    await props.handleCreatePostModel(body);
  };
  return (
    <>
      <Button variant='primary' style={{backgroundColor:"#EA1E63" , border:'none'}} onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Post title</Form.Label>
              <Form.Control ref={postTitleRef} as='textarea' rows={1} />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Post</Form.Label>
              <Form.Control ref={postBodyRef} as='textarea' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handlePost}>
            post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const PostsContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: 'Open Sans';
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  height: 590px;
  @media ${device.tablet} {
    box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  }
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
  margin-inline: 20px;
  padding: 10px 20px 0px 20px;
  background: var(--Paper-Light);
  border-radius: 5px;
  box-shadow: 0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1);
`;

const PostBody = styled.span`
  color: var(--Text-Primary);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
`;

const PostList = styled.div`
  overflow-y: auto;
  height: 400px;
  margin: 25px 0;
`;

const API = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  let { communityId } = useParams();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // 'https://jsonplaceholder.typicode.com/todos' just for test
  // GET / community /: id / get - posts	Get All posts inside the community with : id = communityId
  let getPosts = async (id) => {
    const response = await axios.get(
      `${API}/community/${id}/get-posts`,
      config,
    );
    // console.log('response', response);
    setPosts(response.data);
  };

  let handleCreatePostModel = async (body) => {
    if (!body.post_title && !body.post_body) {
    } else {
      console.log(body);
      await addPost(communityId, body); //communityId represent number of community
    }
  };

  //	/community/:id/create-post	Creates a New Post in a Joined Commuity :id=communityId
  async function addPost(communityId, body) {
    // console.log(communityId);
    try {
      // console.log("body", body);
      await axios.post(
        `${API}/community/${communityId}/create-post`,
        body,
        config,
      );
      getPosts(communityId);
    } catch (error) {
      console.log(error);
    }
  }
  // /update-post/:id	Search The Communities List and Update the Post with :id=postId
  async function updatePost(postId, body) {
    await axios.patch(`${API}/update-post/${postId} `, body);
    getPosts(communityId);
  }

  // Deletes a Post By Community ID and Post ID
  async function deletePost(id, postId) {
    await axios.delete(`${API}/community/${id}/delete-post/${postId} `);
    getPosts(communityId);
  }
  useEffect(() => {
    getPosts(communityId);
  }, []);
  return (
    <>
      <PostsContainer>
      <h4 style={{ color: '#673ab7' }}>Recent Posts</h4>
        <PostList>
          {posts.map((item, idx) => (
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
                {/* This is an amazing postThis is an amazing postThis is an amazing
              postThis is an amazing postThis is an amazing postThis is an
              amazing postThis is an amazing post */}
                {item.post_body}
              </PostBody>
              <PostFooter>
                <p>
                  {/* 8:57 PM 6/19/2022 */}
                  {item.createdAt}
                </p>
                <p>
                  {/* moath abu hamad */}
                  {item.author_name}
                </p>
              </PostFooter>
            </PostCard>
          ))}
        </PostList>
        <CreatePostModel handleCreatePostModel={handleCreatePostModel} />
      </PostsContainer>
    </>
  );
};
export default Posts;
