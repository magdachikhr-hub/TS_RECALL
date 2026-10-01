import React, { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import Loading from "./Loading";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, reset } = useForm<PersonType>();

  const SubmitFunction = (d) => {
    console.log(d);
    reset();

    sendPerson(d);
  };

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

  async function sendPerson(d) {
    try {
      const { data, error } = await supabase.from("person").insert(d).select();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(SubmitFunction)}>
        <div>
          <label htmlFor="name">username</label>
          <input
            type="text"
            id="name"
            className="border border-black"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="score">score</label>
          <input
            type="number"
            id="score"
            className="border border-black"
            {...register("score")}
          />
        </div>
        <button type="submit" className="border border-black">
          submit
        </button>
      </form>

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

//get and post done
