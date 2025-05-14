import React from "react";

export class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.info.name + "child constructor");
    this.state = {
      count: 0,
      //   user: { name: "Dummy", image: "Dummy" },
    };
  }

  async componentDidMount() {
    console.log(this.props.info.name + "child componenet did mount");
    // const data = await fetch("https://api.github.com/users/rishabh120296");
    // this.userData = await data.json();
    // console.log(this.userData);
    // this.setState({
    //   user: this.userData,
    // });
  }
  render() {
    console.log(this.props.info.name + "child render");
    const { name, image, location, contact } = this.props.info;
    console.log(name, image);

    return (
      <div className="user-container">
        <img src={image /*this.state.user.avatar_url*/}></img>
        <div>{name /*this.state.user.name*/}</div>
        <div>{"Count:" + this.state.count}</div>
        <div>{location}</div>
        <div>{contact}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update State
        </button>
      </div>
    );
  }
}

//export default User
