import React, { useMemo } from "react";
import { useState } from "react";
import GrandChild from "./GrandChild";
function Child() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { name: "magda", age: 21, grade: 190 },
    { name: "natia", age: 24, grade: 290 },
    { name: "lado", age: 25, grade: 90 },
  ]);

  // const [students, setStudents] = useState([]);

  const handleClick = () => {
    setCount((c: number): number => c + 1);
  };

  const students = useMemo(() => {
    console.log("hi1");

    return users.filter((u) => u.grade > 120);
  }, [users]);

  return (
    <>
      <GrandChild></GrandChild>
      <button onClick={handleClick}>add +1</button>
      <h1>{count}</h1>
      {students.map((student) => (
        <div key={student.name}>
          <h1>{student.name}</h1>
          <h2>{student.grade}</h2>
        </div>
      ))}
    </>
  );
}

//usecontext/

export default Child;
