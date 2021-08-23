import { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    Person: {
      fullName: "salem",
      bio: "be creative",
      imgSrc: "https://iconape.com/wp-content/png_logo_vector/avatar-4.png",
      profession: "web devolepper",
    },
    show: false,
    timeInterval: 0,
  };

  toggler = () => {
    return this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ timeInterval: this.state.timeInterval + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="main">
        <button onClick={this.toggler}>toggle</button>
        {this.state.show ? (
          <div className="profile">
            <h1>{this.state.Person.fullName}</h1>
            <img src={this.state.Person.imgSrc} alt="avatar" />
            <h2>{this.state.Person.bio}</h2>
            <h2>{this.state.Person.profession}</h2>
          </div>
        ) : (
          ""
        )}
        <h2>{this.state.timeInterval}</h2>
      </div>
    );
  }
}

export default App;
