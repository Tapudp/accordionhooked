import axios from "axios";
import React, { Component } from "react";
import Accordion from "./Accordion";
class Ck12Test extends Component {
  state = {
    responsedata: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/book/maths")
      .then(apiresponse => {
        this.setState(
          {
            responsedata: JSON.parse(
              JSON.stringify(apiresponse.data.response, null, 2)
            )
          },
          () => console.log("now the state is ", this.state.responsedata)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    const { responsedata } = this.state;
    return (
      <>
        {responsedata &&
          responsedata.map((item, index) => (
            <>
              <Accordion item={item} index={index} />
            </>
          ))}
      </>
    );
  }
}

export default Ck12Test;
