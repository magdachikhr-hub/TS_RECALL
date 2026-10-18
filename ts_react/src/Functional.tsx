import { memo } from "react";
//import { useCallback } from "react";

interface Property {
  isWorking: Boolean;
  func: (a: number, b: number) => number;
}

const Functional = memo((props: Property) => {
  console.log("functinal is running");
  const { isWorking, func } = props;
  console.log(isWorking);
  console.log(func);

  //const memorizedFunction = useCallback(() => {
  //  func(12, 13);
  //});

  console.log(props);
  return <></>;
});

export default Functional;
