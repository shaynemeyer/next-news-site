import { Store, createStore, combineReducers } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { comments, CommentsState } from './comments';
import { post, PostState } from './post';

export type State = {
  post: PostState;
  comments: CommentsState;
};

const combinedReducers = combineReducers({ post, comments });

const makeStore: MakeStore<Store<State>> = () => createStore(combinedReducers);

export const store = createWrapper<Store<State>>(makeStore, {
  debug: true,
});
