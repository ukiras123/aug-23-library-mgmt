import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import CustomInput from "../../components/customInput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";
function Login() {
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@smith.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
    },
  ];
  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form>
          {inputs.map((input) => (
            <CustomInput
              // label={input.label}
              // placeholder={input.placeholder}
              // type={input.type}
              {...input}
            />
          ))}

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Login;
