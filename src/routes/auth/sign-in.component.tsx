import LoginForm from "../../components/Auth/login-form/login-form.component";

import authBgImage from "../../assets/auth-bg-image.jpg";

import {
  AuthBackGroundContainer,
  AuthContainer,
  AuthFormContainer,
} from "./auth.styles";

const SignIn = () => {
  return (
    <AuthContainer>
      <AuthBackGroundContainer $bgImage={authBgImage} />
      <AuthFormContainer>
        <LoginForm />
      </AuthFormContainer>
    </AuthContainer>
  );
};
export default SignIn;
