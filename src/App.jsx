import React from "react";
import InfoCard from "./InfoCard.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          title: "React & Express Project 1",
          subtitle: "react js is awsome frontend",
        },
        {
          id: 2,
          title: "React & Express Project 2",
          subtitle: "react js is awsome frontend",
        },
        {
          id: 3,
          title: "React & Express Project 3",
          subtitle: "react js is awsome frontend",
        },
        {
          id: 4,
          title: "React & Express Project 4",
          subtitle: "react js is awsome frontend 4",
        },
      ],
    };
  }

  changeHeading = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          item.title = "Wo cheez";
        }

        return item;
      }),
    });
  };

  render = () => {
    return (
      <>
        {this.state.list.map((item) => {
          return <InfoCard {...item} handleChange={this.changeHeading} />;
        })}
      </>
    );
  };
}

export default App;
