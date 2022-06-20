import axios from "axios";
import React, { useState } from "react";

export const postsContext = React.createContext();



export default function postsProvider() {
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

    const state = { posts, setPosts, getPosts, addPost, updatePost, deletePost };

    return (
        <postsContext.Provider value={state}>
            {props.children}
        </postsContext.Provider>
    )
}


// Post Managment Routes
// Method	Route	Function
// POST 	/community/:id/create-post	Creates a New Post in a Joined Commuity
// GET	/community/:id/get-posts	Get All Communities Information
// GET	/community/:id/search	Search The Posts In a Certain Community
// PATCH	/update-post/:id	Search The Communities List
// DELETE	/community/:id/delete-post/:postId	Deletes a Post By Community ID and Post ID
// GET	/user/:id/get-all-posts	Returns All Posts by a Certain Use
// GET	/posts/community/:id	Returns All Posts in a Community
// GET	/user/:id/community/:cid	Returns All Posts by a User in a Community
// GET	/community/:id/live-chat	Opens a New Group Chat Room For a Community