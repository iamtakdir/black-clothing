import { useState } from "react";
import "./sign-in-form.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("You have entered wrong password , try again");
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account ? </h2>
      <span>Signin with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handelChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handelChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            SignIn Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
