import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { Comment } from "../shared/types";
import { HydrateAction } from "./hydrate";

export const UPDATE_COMMENTS_ACTION = "UPDATE_COMMENTS";

export type CommentsState = Comment[];

export interface UpdateCommentsAction extends AnyAction {
  type: typeof UPDATE_COMMENTS_ACTION;
  comments: Comment[];
}

type CommentsAction = HydrateAction | UpdateCommentsAction;

export const comments = (state: CommentsState = [], action: CommentsAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload?.comments ?? [];
    case UPDATE_COMMENTS_ACTION:
      return action.comments;
    default:
      return state;
  }
};
