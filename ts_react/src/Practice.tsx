import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";

interface PersonType {
  id: number;
  score: number;
  username: string;
}

function Practice() {
  const [people, setPerson] = useState<PersonType[]>();
  //const [age, setAge] = useState<number>();
  const [loading, setloading] = useState(true);

  //setAge(324);
  // console.log(supabase);
  useEffect(() => {
    setloading(true);
    async function getPerson() {
      try {
        const response = await supabase.from("person").select("*");
        const data = response.data;
        console.log(data);

        if (!data.ok) {
        }

        if (data) {
          setPerson(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }

    getPerson();
  }, []);

  return (
    <>
      {loading && <p>please wait</p>}
      {people &&
        people.map((person) => (
          <div
            key={person.id}
            style={{ border: "1px solid black", width: "100px" }}
          >
            <h3>{person.username}</h3>
            <span>score: {person.score}</span>
          </div>
        ))}
    </>
  );
}

export default Practice;
