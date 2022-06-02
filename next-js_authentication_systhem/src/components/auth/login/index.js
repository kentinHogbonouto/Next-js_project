import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const data = useSession();
  if (session) {
    return (
      <>
        <h1>Hello world</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Login;
