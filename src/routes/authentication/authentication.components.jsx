import SignUpForm from "../../components/signup-form/signup-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";
const SignIn = () => {
  return (
    <div>
      <h1>SignIn user</h1>
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default SignIn;
