import { message } from 'antd';
import { ModifyAction } from '../../actions';
import { ADD_COUNT, DECREASE_ITEM } from '../../actionType/index';

export interface HomeReducer {
  count: number
}

interface HomeAction {
  type: ModifyAction
}

function homeReducer(state: HomeReducer = {
  count: 1
}, action: HomeAction): HomeReducer {

  switch (action.type) {
    case ADD_COUNT: {
      return {
        ...state, count: state.count + 1
      }
    }

    case DECREASE_ITEM: {
      if (state.count === 0) {
        message.warning('到 0 啦 ~');
        return state
      } else {
        return {
          ...state, count: state.count - 1
        }
      }
    }
    default: {
      return state;
    }
  }

}

export default homeReducer;