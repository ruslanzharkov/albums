import * as postsActions from './posts';
import * as userActions from './user';

export const actionCreators = {
  ...postsActions,
  ...userActions
};
