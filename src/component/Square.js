import React from "react";
import "./Square.css"

export default class Square extends React.Component {


    render() {
        return (
          <button className="square" 
            onClick={() => { this.props.onClick()}}>
            {this.props.value}
          </button>
        );
    }
}

/** default의 유무에 따라 import 형식이 달라짐 */