import react from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import providers from "../../../src/constants/provider";
import "bootstrap/dist/css/bootstrap.min.css";

import { BsGithub, BsFacebook, BsMedium, BsTwitter } from "react-icons/bs";


const signIn = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") return <span>loading...</span>;

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);
    return <span>dashboard component</span>;
  }

  return (
    <div className="container-fluid sign-container">
      <div className="row sign-container">
          <div className="col-lg-8 d-flex justify-content-center align-items-center">
              <h1>Hello world</h1>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            {providers.map(elmt => (
              <button type="button" key={elmt.id} className="btn">
                <Icon />
                <span>Sign in with {elmt.name}</span>
              </button>
            ))}
          </div>
      </div>
    </div>
  )
};

export default signIn;
