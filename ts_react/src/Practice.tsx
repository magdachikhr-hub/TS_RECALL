import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import Loading from "./Loading";
interface PersonType {
  id?: number;
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
        const { data, error } = await supabase.from("person").select("*");

        console.log(data);

        if (error) {
          throw new Error(error.message);
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

  useEffect(() => {
    async function sendPerson() {
      try {
        const { data, error } = await supabase
          .from("person")
          .insert({
            score: 15,
            username: "madu",
          })
          .select();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    sendPerson();
  }, []);

  return (
    <>
      {loading && <Loading></Loading>}
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
