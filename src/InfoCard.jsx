import React from "react";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div
        className="card"
        onClick={() => {
          this.props.handleChange(this.props.id);
        }}
      >
        <h3 className="title">{this.props.title}</h3>
        <p className="sub-title">{this.props.subtitle}</p>
      </div>
    );
  };
}

export default InfoCard;
