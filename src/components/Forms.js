import React from "react";

export default function Forms({handleSubmits, values, setValues}) {
  const handleChanges = (e) => {
    setValues(e.target.value);
    console.log("e", e);
  };
  return (
    <div>
      <form onSubmit={handleSubmits} className="flex pt-2">
        <input
          type="text"
          name="value"
          className="w-full px-3 py-2 text-gray-500 border rounded shadow"
          placeholder="해야 할일을 입력해주세요"
          value={values}
          onChange={handleChanges}
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
