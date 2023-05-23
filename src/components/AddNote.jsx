import React, { useState } from "react";

// Import Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddNote = ({ notes, setNotes, createNote }) => {
  console.log(notes);
  // add form logic here
  const initialValues = {
    title: "",
    content: "",
  };

  const [noteValue, setNoteValue] = useState(initialValues);

  function handleSubmit(values) {
    createNote({
      title: values.title,
      content: values.content,
    });
    setNotes(initialValues);
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("The Name Is Required *"),
    content: Yup.string().required("The Discription Is Required *"),
  });

  return (
    <div className="w-3/5 bg-white shadow-sm py-2 px-6 rounded-lg">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col">
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="enter note"
            className="my-2 px-2 py-2 rounded-sm outline-none border-solid border-solid border-gray border-2 
            mt-5 rounded-lg rounded-md"
            autoComplete="off"
          />
          <p className="text-red-400 text-sm font-bold -mt-2.5 mb-2 px-0 font-normal">
            <ErrorMessage name="title" />
          </p>
          <Field
            as="textarea"
            id="textarea"
            name="content"
            className="pt-2 h-40 px-2 pb-5 outline-none border-solid border-solid border-gray border-2 rounded-md"
          />
          <p className="text-red-400 font-bld text-sm mx-0 font-normal">
            <ErrorMessage name="content" />
          </p>
          <button
            type="Submit"
            className="w-full bg-yellow-400 py-2 rounded-md my-5 font-bold text-center "
          >
            Add Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
