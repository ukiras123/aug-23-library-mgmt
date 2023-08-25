import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import AdminLayout from "../../components/layouts/AdminLayout";
import { addNewBookAction } from "./bookAction";

function NewBook() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Twilight",
      required: true,
    },
    {
      label: "Author Name",
      name: "name",
      type: "text",
      placeholder: "Author",
      required: true,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2022",
    },
    {
      label: "Image URL",
      name: "url",
      type: "url",
      placeholder: "https://.../",
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      rows: "4",
      placeholder: "Summary",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(addNewBookAction(form));
    // Pas all the book info to FireBase
    // New book action to handle this part
  };

  return (
    <AdminLayout>
      <h3>New Book</h3>
      <hr></hr>
      <Link to="/books">
        <Button variant="secondary">
          <AiOutlineArrowLeft />
          Go Back
        </Button>
      </Link>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              onChange={handleOnChange}
              // label={input.label}
              // placeholder={input.placeholder}
              // type={input.type}
              {...input}
            />
          ))}

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
}

export default NewBook;
