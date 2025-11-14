import { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../../supabase/supabase.js";

import {
  FormSchemaLogin,
  ConfirmSchemaLogin,
  getErrors,
  getFieldError,
} from "../../Validation/validationForm";

export default function Login() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    const { error, dataForm } = ConfirmSchemaLogin.safeParse(formState);
    if (error) {
      const errors = getErrors(error);
      setFormErrors(errors);
      console.log(errors);
    } else {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formState.email,
        password: formState.password,
      });
      console.log(error);

      if (error) {
        alert("Signing in error");
      } else {
        alert("Signed in");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/");
      }
    }
  };
  const onBlur = (property) => () => {
    const message = getFieldError(
      FormSchemaLogin,
      property,
      formState[property]
    );
    setFormErrors((prev) => ({ ...prev, [property]: message }));
    setTouchedFields((prev) => ({ ...prev, [property]: true }));
  };

  const isInvalid = (property) => {
    if (formSubmitted || touchedFields[property]) {
      return !!formErrors[property];
    }
    return undefined;
  };
  const setField = (property, valueSelector) => (e) => {
    setFormState((prev) => ({
      ...prev,
      [property]: valueSelector ? valueSelector(e) : e.target.value,
    }));
  };

  return (
    <div className="container text-danger">
      <form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={setField("email")}
          onBlur={onBlur("email")}
          aria-invalid={isInvalid("email")}
          required
          className="form-control w-75 mt-1 mb-2"
        />
        {formErrors.email && <small>{formErrors.email}</small>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={setField("password")}
          onBlur={onBlur("password")}
          aria-invalid={isInvalid("password")}
          required
          className="form-control w-75 mt-1 mb-2"
        />
        {formErrors.password && <small>{formErrors.password}</small>}

        <br />
        <button type="submit" className="btn btn-danger  mt-1 ">Login</button>
      </form>
    </div>
  );
}
