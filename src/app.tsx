import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { stateToProps, dispatchToProps } from './store/actions';
import { Button, Badge } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export interface IProps {
  count?: number,
  addCount?: () => void,
  decreaseCount?: () => void,
}

export interface IState {

}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {

    }
  }
  public render() {
    const { count, addCount, decreaseCount } = this.props;
    const ButtonGroup = Button.Group;
    return (
      <div className='demo'>
        <ButtonGroup>
          <Button onClick={decreaseCount}>
            <MinusOutlined />
          </Button>
          <Button onClick={addCount}>
            <PlusOutlined />
          </Button>
        </ButtonGroup>
        <Badge count={count} showZero />
      </div>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(App);