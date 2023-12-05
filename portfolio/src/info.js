import React from "react";

class Info extends React.Component {
  render() {
    const title = "My Portfolio";
    const showTitle = true;
    return (
      <div>
        <h1>{showTitle ? title : "No title"}</h1>
        <p>My projects</p>
      </div>
    );
  }
}

export default Info;
