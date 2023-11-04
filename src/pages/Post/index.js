import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import posts from '../Posts/posts';

function Post() {
    const { id } = useParams();

    const post = posts.find(post => post.id === id);
    return (
        <Container>
            <Post
                key={post.id}
                title={post.title}
                description={post.description}
            />
        </Container>
    )
}

export default Post;