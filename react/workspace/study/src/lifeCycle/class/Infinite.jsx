import React, { Component } from 'react';

class Infinite extends Component {

  state = {
    users : [],
  }

  componentDidMount = () => {
    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json();
      console.log("리랜더링")
      return datas;
    }

    getDatas().then((datas) => this.setState({users : datas})).catch(console.error);
  }

  render() {

    const {users} = this.state;

    return (
      <div>
        {users.map((user, i) => <p key={i}>{user.name}</p>)}
      </div>
    );
  }
}

export default Infinite;