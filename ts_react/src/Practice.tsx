import { useEffect, useState } from "react";
//import { set, useForm, type ErrorMessageProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import { supabase } from "./supabase/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

interface PersonType {
  id?: number;
  score: number;
  username: string;
}

function Practice() {
  const [people, setPerson] = useState<PersonType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | undefined>();

  const { register, handleSubmit, reset } = useForm<PersonType>();

  async function getPerson() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("person").select("*");

      if (error) {
        setError(error);
      }
      if (data) {
        setPerson(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const SubmitFunction = async (data: PersonType) => {
    console.log(data);

    reset();
    await sendPerson(data);
    await getPerson();
  };

  useEffect(() => {
    setLoading(true);

    getPerson();
  }, []);

  async function sendPerson(d: PersonType) {
    setLoading(true);
    console.log(d);
    try {
      const { data, error } = await supabase.from("person").insert(d).select();
      if (error) {
        throw new Error(
          "We couldn't complete that. Please try again in a moment.",
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error as PostgrestError);
    } finally {
      setLoading(false);
    }
  }

  async function deletePerson(id: number | undefined) {
    try {
      const { error } = await supabase.from("person").delete().eq("id", id);
      if (error) {
        throw new Error(
          "We couldn't complete that. Please try again in a moment.",
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {error && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          <p>{error.message}</p>
        </div>
      )}
      <form
        onSubmit={handleSubmit(SubmitFunction)}
        className="flex flex-col gap-3 border pt-3 pl-3 pb-3 rounded-3xl"
      >
        <div>
          <label htmlFor="name">username: </label>
          <input
            className="outline rounded"
            type="text"
            id="name"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="score">score: </label>
          <input
            className="outline rounded"
            type="number"
            {...register("score")}
          />
        </div>

        <button
          className="w-17.5 h-7.5 border rounded hover:bg-green-700 hover:text-white"
          disabled={loading}
          type="submit"
        >
          submit
        </button>
      </form>

      {loading && <p>please wait ...</p>}

      {people &&
        people.map((person) => (
          <div
            key={person.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              gap: "10px",
              width: "120px",
              display: "flex",
              marginTop: "7px",
              marginBottom: "10px",
            }}
          >
            <button
              className="border pl-1 pr-1 h-5 rounded-3xl flex items-end"
              style={{ order: 1 }}
              onClick={async () => {
                await deletePerson(person.id);
                await getPerson();
              }}
            >
              x
            </button>
            <div>
              <h3
                style={{ marginTop: "5px", order: 2 }}
                className="font-semibold"
              >
                {person.username}
              </h3>
              <span>score: {person.score}</span>
            </div>
          </div>
        ))}
    </>
  );
}

export default Practice;
