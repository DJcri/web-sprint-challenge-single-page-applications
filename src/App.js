import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/formSchema";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  special: "",
  pepperoni: false,
  sausage: false,
  pineapple: false,
  onions: false,
};

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const change = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = () => {
    axios
      .post("https://reqres.in/", formValues)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <header>
        <h1 className="logo">Lambda Eats</h1>
        <NavLink to="/">Home</NavLink>
      </header>
      <Switch>
        <Route path="/form">
          <Form
            change={change}
            values={formValues}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
