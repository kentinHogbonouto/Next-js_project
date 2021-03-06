import react from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import providers from "../../../src/constants/provider";
import { signIn } from "next-auth/react";

import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") return <span>loading...</span>;

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);
    return <span>dashboard component</span>;
  }

  const handleAuthSignIn = (provider) => () => signIn(provider);

  return (
    <div className="container-fluid sign-container">
      <div className="row sign-container">
        <div className="col-lg-8 d-flex justify-content-center align-items-center">
          <h1>Hello world</h1>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
          {providers.map(({ name, Icon, id }) => (
            <button type="button" key={id} className="btn" onClick={handleAuthSignIn(name)}>
              <Icon />
              <span>Sign in with {name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
