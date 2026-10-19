import { useState, useEffect } from "react";

function useFetch(url) {
  console.log(url);
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return data;
}
export default useFetch;
