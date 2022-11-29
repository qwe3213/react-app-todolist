import React from "react";

export default function Form({value, setValue, setTododata}) {
  const handleChange = (e) => {
    setValue(e.target.value); //입렵한 것이 text에 보이게 하기.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTododata((prev) => [...prev, newTodo]); // prev 이전의값 ...prev는 이전의값 배열안의 것들 모두, newTodo는 새로운값    //원래 있던 할 일에 새로운 할 일 더해주기
    setValue(""); // value의 값을 빈값으로 설정
  };
  return (
    <div>
      <form style={{display: "flex"}} onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          placeholder="해야 할일을 입력해주세요"
          style={{flex: "10", padding: "5px"}}
          value={value}
          onChange={handleChange}
        />
        <input type="submit" value="입력" className="btn" style={{flex: "1"}} />
      </form>
    </div>
  );
}
