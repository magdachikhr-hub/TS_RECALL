import React from "react";
import { useContext, useMemo, useState, useEffect } from "react";

function GrandChild() {
  // const name = useContext(NameContext)
  const [domains, setDomains] = useState([]);

  const BASE_URL = "https://catchdoms.com/api";

  useEffect(() => {
    async function getDomains() {
      try {
        const response = await fetch(`${BASE_URL}/domains`, {
          headers: {
            Authorization:
              "Bearer 625|F346OSBOQ714GNZ8IinxhI6AugElDdIVY2waxxeVbd46f5b1",
            Accept: "application/json",
          },
        });
        const data = await response.json();

        setDomains(data.data);
        // console.log(data.data)
      } catch (error) {
        console.log(error);
      }
    }

    getDomains();
  }, []);

  let filteredArray = [];

  useMemo(() => {
    filteredArray = domains.filter((d) => d.bids_count > 20);
  }, [domains]);

  console.log(filteredArray);

  return <></>;
}

export default GrandChild;
