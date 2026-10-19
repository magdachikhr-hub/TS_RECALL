import Child from "./Child";

function Parent() {
  //2.1
  let books = [
    { id: 1, name: "pride and prejudice", author: "jane austine" },
    { id: 2, name: "vepxistyaosani", author: "shota rustaveli" },
    { id: 3, name: "maze runners", author: "john doe" },
  ];

  return (
    <>
      <Child props={books}></Child>
    </>
  );
}

export default Parent;
