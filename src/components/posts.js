import React, { useContext } from 'react'
import { postsContext } from './context/posts/postsContext'

export default function posts(props) {
    const posts = useContext(postsContext);

    return (
        <div>posts</div>
    )
}
