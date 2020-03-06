import { ADD_COUNT, DECREASE_ITEM } from '../actionType/index';
import { HomeReducer } from '../reducer/home/index'

export type ModifyAction = ADD_COUNT | DECREASE_ITEM;

interface State {
  homeReducer: HomeReducer
}

export const stateToProps = (state: State) => {
  return {
    count: state.homeReducer.count
  }
}

export const dispatchToProps = (dispatch: Function): object => (
  {
    addCount: (): void => {
      dispatch({
        type: ADD_COUNT
      })
    },
    decreaseCount: (): void => {
      dispatch({
        type: DECREASE_ITEM
      })
    }
  }
)