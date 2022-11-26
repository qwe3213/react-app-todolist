import React, {Component} from "react";
import "./App.css";
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right",
  };
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };
  tododata = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: true,
    },
  ];
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.tododata.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button style={this.btnStyle}>x</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
