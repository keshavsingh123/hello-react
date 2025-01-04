import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dummy",
      bio: "abcd",
    };
    console.log(this.props.name + " child constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + " child componentdid Mount");
    //api call
    const data = await fetch("https://api.github.com/users/keshavsingh123");
    const json = await data.json();
    console.log(json);
    this.setState(json);
  }
  componentDidUpdate() {
    console.log(this.props.name + " child componentdid Update");
  }
  render() {
    console.log(this.props.name + " child render");

    const { name, avatar_url } = this.state;
    // const { count } = this.state;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <img src={avatar_url} />
      </div>
    );
  }
}
export default UserClass;

// <button
// onClick={() => {
//   this.setState({
//     count: this.state.count + 1,
//   });
// }}
// >
// count
// </button>
