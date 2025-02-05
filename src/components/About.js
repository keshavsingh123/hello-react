import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>Welcome to about us page !!</h2>
//       <User name={"Abhishek Singh"} />
//       <UserClass name={"Keshav Singh"} location={"Kanpur"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentdid Mount");
    //api call
  }
  render() {
    // console.log("parent render");

    //You can pass UserContext Multiple times
    return (
      <div>
        <h1>About us</h1>
        <h2>Welcome to about us page !!</h2>
        {/*  <User name={"Abhishek Singh"} /> */}
        <UserClass name={"Keshav Singh"} location={"Kanpur"} />
        {/* <UserClass name={"abhishek Singh"} location={"lucknow"} /> */}
        <UserContext.Consumer>
          {({ loggedIn }) => {
            return <h1>{loggedIn}</h1>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;
/*
parent constructor
parent render
   child constructor
   child render
  DOM Manipulation
   child componentDidMount 
   parent componentDidMount
*/
