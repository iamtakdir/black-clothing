import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/signup-form/signup-form.components";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn user</h1>
      <button onClick={logGoogleUser}> Sign In With Google </button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
