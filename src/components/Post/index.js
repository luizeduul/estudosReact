import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import { Subtitle, Rate, Container } from './styles';
function Post({ post, onRemove }) {

    if (post.read) {
        return <h2>{post.title} está lido</h2>
    }

    function onRemoveClick() {
        onRemove(post.id);
    }

    return (
        <Container
            removed={post?.removed}
        >
            <PostHeader post={{
                id: post.id,
                title: post.title,
                read: post.read,
            }} onRemove={onRemoveClick} />
            <Subtitle>{post.subtitle}</Subtitle>
            <Rate>Likes: {post.likes / 2}</Rate>
            <br />
            <br />
        </Container>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        removed: PropTypes.bool.isRequired,
    }).isRequired,
    onRemve: PropTypes.func.isRequired,
}

export default Post;