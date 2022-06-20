import React, { useState, useEffect } from 'react'

export default function posts(props) {
    const API = "http://isupport-server.herokuapp.com";

    const [posts, setPosts] = useState([]);



    // GET	/community/:id/get-posts	Get All posts inside the community with :id=communityId
    async function getPosts(id) {
        const response = await axios.get(API + `/community/${id}/get-posts`);
        setPosts[response.data];
    }

    //	/community/:id/create-post	Creates a New Post in a Joined Commuity :id=communityId
    async function addPost(communityId, body) {
        await axios.post(`${API}+/community/${communityId}/create-post `, body);
    }

    // /update-post/:id	Search The Communities List and Update the Post with :id=postId
    async function updatePost(postId, body) {
        await axios.patch(`${API}+/update-post/${postId} `, body);
    }

    // /community/:id/delete-post/:postId	
    // Deletes a Post By Community ID and Post ID
    async function deletePost(id, postId) {
        await axios.delete(`${API}+/community/${id}/delete-post/${postId} `);
    }
    useEffect(() => {
        getPosts(props.communityId);
    }, [])

    return (
        <div>posts</div>
    )
}
