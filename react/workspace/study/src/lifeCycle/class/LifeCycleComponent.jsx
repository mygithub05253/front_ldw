import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null
  }

  constructor(props) {
    // super : 부모를 의미
    super(props)
    console.log(props, "부모가 준 props")
  }

  // 마운트 랜더링 직전에 실행되는 함수
  // 버츄얼 DOM이 먼저 사용하는 함수이기 때문에, static 사용
  // static 사용 시 생명 주기가 프로그램 시작부터 끝까지 유지
  // 즉, 컴포넌트가 호출될 때 생성자가 호출되는 시점에 올라가는 경우, 이전 값과 이후 값을 비교할 수 없기 때문
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState)
    if(nextProps.color !== prevState.color) {
      return {color : nextProps.color};
    }
    return null;
  }

  // 마운트 직후
  // 컴포넌트가 완성된 직후
  componentDidMount() {
    console.log("componentDidMount")
  }

  // 업데이트 단계
  // 리랜더링 여부를 설정하는 단계
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState)
    // this.state.number가 5의 배수가 아니면 리랜더링이 되지 않도록 설정
    return nextState.number % 5 !== 0;
  }

  // 이전 값을 저장하는 단계
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    if(prevProps.color !== this.props.color) {
      return this.color.Ref.style.backgroundColor;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState) {
      console.log(`업데이트 직전 state : ${prevState}`)
    }
    if(snapshot) {
      console.log(`업데이트 직전 color : ${snapshot}`)
    }
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  colorRef = null;

  render() {
    return (
      <div>
        <div ref={(element) => this.colorRef = element} style={{
          width : "100px",
          height : "100px",
          backgroundColor : this.state.color,
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          color : "#000"
        }}>
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;