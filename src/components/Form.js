import React from "react";

export default function Form({value, setValue, handleSubmit}) {
  const handleChange = (e) => {
    setValue(e.target.value); //입렵한 것이 text에 보이게 하기.
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex pt-2">
        <input
          type="text"
          name="value"
          className="w-full px-3 py-2 text-gray-500 border rounded shadow"
          placeholder="해야 할일을 입력해주세요"
          value={value}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="입력"
          className=" p-2 text-blue-400 border-2  border-blue-400 rounded hover:text-white hover:bg-blue-200 "
        />
      </form>
    </div>
  );
}
