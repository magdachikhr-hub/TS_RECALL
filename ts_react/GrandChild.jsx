import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

function GrandChild() {
  const [domains, setDomains] = useState([]);

  const BASE_URL = "https://catchdoms.com/api";

  useEffect(() => {
    async function getDomains() {
      try {
        const response = await fetch(`${BASE_URL}/domains`, {
          headers: {
            Authorization:
              "Bearer 624|KFWktEFUrWiDwVy9bla6BJyMFn2cpIoMp5ahkGfgf62ae758",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        console.log(data.data);
        setDomains(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDomains();
  }, []);

  useMemo(() => {
    setDomains((doms) => {
      return doms?.filter((d) => {
        d.bids_count > 50;
      });
    });
  }, [domains]);

  console.log(domains);

  return <div>GrandChild</div>;
}

export default GrandChild;
