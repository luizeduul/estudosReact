import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

function PostHeader({
  post, onRemove
}) {
  return (
    <>
      <strong>
        {post.read ? <s>{post.title}</s> : post.title}
      </strong>
      <Button onClick={onRemove}>
        Remover
      </Button>
    </>
  )
}

PostHeader.propTypes = {
  post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default PostHeader;