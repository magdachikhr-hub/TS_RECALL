import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";

interface PersonType {
  id: number;
  score: number;
  username: string;
}

function Practice() {
  const [people, setPerson] = useState<PersonType[]>();

  // console.log(supabase);
  useEffect(() => {
    async function getPerson() {
      try {
        const { data } = await supabase.from("person").select("*");

        console.log(data);
        if (data) {
          setPerson(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getPerson();
  }, []);

  return (
    <>
      {people &&
        people.map((person) => (
          <div style={{ border: "1px solid black", width: "100px" }}>
            <h3 key={person.id}>{person.username}</h3>
            <span>score: {person.score}</span>
          </div>
        ))}
    </>
  );
}

export default Practice;
