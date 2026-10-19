import { memo } from "react";

interface Property {
  isWorking: Boolean;
  func: (a: number, b: number) => number;
  func2: () => { id: number; name: string } | undefined;
}

const Functional = memo((props: Property) => {
  console.log("functinal is running");
  const { isWorking, func, func2 } = props;
  console.log(isWorking);
  console.log(func);

  func(12, 13);
  func2();
  console.log(props);
  return <></>;
});

export default Functional;
