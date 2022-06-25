import "./authentication.styles.scss";
import SignUpForm from "../../components/signup-form/signup-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";
const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default SignIn;
