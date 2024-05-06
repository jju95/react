import React from "react";
import "./Square.css"

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        };
    }

    render() {
        return (
          <button
            className="square"
            onClick={() => {
              /** state 변경하기 */
              this.setState({ value: "X" });
            }}
          >
            {this.state.value}
          </button>
        );
    }
}

/** default의 유무에 따라 import 형식이 달라짐 */