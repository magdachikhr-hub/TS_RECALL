import "./App.css";
import { useState } from "react";
import { useFormik } from "formik";
function App() {
  const [submissions, setSubmissions] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    onSubmit: (values) => {
      setSubmissions((prev) => [...prev, values]);
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-80 h-34 border flex flex-col pl-3 gap-3 pt-2"
      >
        <div>
          <label htmlFor="name">userName: </label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            className="border rounded-lg pl-2 w-50 h-7.5"
            placeholder="jane doe"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            className="border rounded-lg pl-2 w-50 h-7.5"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="border w-40 h-8 rounded-xl">
            submit
          </button>
        </div>
      </form>
      <div className="border w-102 h-40 rounded-lg flex flex-col justify-center pl-3 gap-4 mt-6">
        <p className="border-b w-90">name: {formik.values.name}</p>

        <p className="border-b w-90">email: {formik.values.email}</p>
      </div>
      {submissions.map((submission, index) => (
        <div
          key={index}
          className="border w-102 h-40 rounded-lg flex flex-col justify-center pl-3 gap-4 mt-6"
        >
          <h2 className="text-[17px] font-semibold text-emerald-700">
            Congratulations, you have successfully registered!
          </h2>

          <p className="border-b w-90">name: {submission.name}</p>

          <p className="border-b w-90">email: {submission.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
