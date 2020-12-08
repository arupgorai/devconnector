import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import Spinner from '../layout/Spinner';
import CommentForm from './CommentForm';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
  // get post on page load
  useEffect(() => {
    getPost(match.params.id)
  }, [getPost]);

  return (
    <>
      {loading || post === null ? <Spinner /> : (
        <>
          <Link to='/posts' className="btn">Back to Posts</Link>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </>
      )}
    </>
  );
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);