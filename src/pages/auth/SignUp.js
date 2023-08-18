import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import CustomInput from "../../components/customInput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";
function SignUp() {
  const [form, setForm] = useState({});
  const [errorMsg, setErrorMsg] = useState();

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "04xxxxxx",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@smith.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
      minLength: 6,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*******",
      required: true,
      minLength: 6,
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Confirm pass and pass did not match");
      return;
    }
    
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        {errorMsg && <Alert variant={"danger"}>{errorMsg}</Alert>}
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input) => (
            <CustomInput
              onChange={handleOnChange}
              // label={input.label}
              // placeholder={input.placeholder}
              // type={input.type}
              {...input}
            />
          ))}

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default SignUp;
