import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { Loader } from '../../components/Loader';
import { PostBody } from '../../components/Post/PostBody';
import { Comments } from '../../components/Comments';

import { fetchPost } from '../../api/post';
import { fetchComments } from '../../api/comments/fetch';
import { State, store } from '../../store';
import { PostState, UPDATE_POST_ACTION } from '../../store/post';
import { CommentsState, UPDATE_COMMENTS_ACTION } from '../../store/comments';

export const getServerSideProps = store.getServerSideProps(
  (store) =>
    async ({ params }) => {
      if (typeof params?.id !== 'string') {
        throw new Error('Unexpected id');
      }

      const comments = await fetchComments(params.id);
      const post = await fetchPost(params.id);

      store.dispatch({ type: UPDATE_POST_ACTION, post });
      store.dispatch({ type: UPDATE_COMMENTS_ACTION, comments });

      return { props: {} };
    }
);

const Post: NextPage = () => {
  const post = useSelector<State, PostState>(({ post }) => post);
  const comments = useSelector<State, CommentsState>(
    ({ comments }) => comments
  );

  if (!post) return <Loader />;

  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  );
};

export default Post;
