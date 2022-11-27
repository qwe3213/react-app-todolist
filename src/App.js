import React, {Component} from "react";
import "./App.css";
export default class App extends Component {
  state = {
    tododata: [],
    value: "",
  };
  btnStyle = {
    color: "#fff",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right",
  };
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.tododata.filter((data) => data.id !== id); // 입력한것 지우기
    this.setState({tododata: newTodoData});
  };
  handleChange = (e) => {
    this.setState({value: e.target.value}); //입렵한 것이 text에 보이게 하기.
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    //원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({tododata: [...this.state.tododata, newTodo], value: ""}); // this.state.tododata 원래 있떤 데이터 newTodo 새로운 데이터  배열밖의 값은 입력 엔터후 텍스트창 빈칸으로 만들기
  };
  handleCompleteChange = (id) => {
    let newTodoData = this.state.tododata.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({tadodata: newTodoData});
  };
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.tododata.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => this.handleCompleteChange(data.id)}
              />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                x
              </button>
            </div>
          ))}
          <form style={{display: "flex"}} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              placeholder="해야 할일을 입력해주세요"
              style={{flex: "10", padding: "5px"}}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{flex: "1"}}
            />
          </form>
        </div>
      </div>
    );
  }
}
