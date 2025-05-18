import UserContext from "../utils/UserContext";
import { User } from "./User";
import React from "react";

export class AboutComponent extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
    this.state = {
      count: 0,
      user: { name: "Dummy", image: "Dummy" },
    };
  }

  async componentDidMount() {
    console.log("parent componenet did mount");
    const data = await fetch("https://api.github.com/users/rishabh120296");
    this.userData = await data.json();
    console.log(this.userData);
    this.setState({
      user: this.userData,
    });
  }
  render() {
    console.log("parent render");
    const { name, avatar_url } = this.state.user;
    return (
      <div>
        <h1>About Us</h1>

        <UserContext.Consumer>
          {({ loggedInUser }) => <h2>{"Hello " + loggedInUser}</h2>}
        </UserContext.Consumer>

        <p>
          Good Food makes food ordering effortless! With a wide range of
          cuisines from top restaurants, secure payments, and fast delivery, we
          bring delicious meals straight to your door. Order anytime,
          anywhere—your cravings, our priority!
        </p>
        <User
          info={{
            name: name,
            image: avatar_url,
            location: "Hyderabad",
            contact: "rishabh@gmail",
          }}
        />
        <User
          info={{
            name: name,
            image: avatar_url,
            location: "Hyderabad",
            contact: "rishabh@gmail",
          }}
        />
      </div>
    );
  }
}
// AboutComponent = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         Good Food makes food ordering effortless! With a wide range of cuisines
//         from top restaurants, secure payments, and fast delivery, we bring
//         delicious meals straight to your door. Order anytime, anywhere—your
//         cravings, our priority!
//       </p>
//       <User info={{ name: "Aarushi", location: "Hyderabad" }} />
//     </div>
//   );
// };

// export default AboutComponent;
