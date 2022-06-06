import React, {Fragment} from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  const {data: session} = useSession();
  const {push, asPath} = useRouter();

  const handleSignOut = async () => {
    const signOutRedirect = await signOut({redirect: false, callbackUrl: '/auth/registration/'});
    push(signOutRedirect.url)
  } 

  const handleSignIn = () => push(`/auth/login/sign-in?callbackurl=${asPath}`)

  return(
    <div className="d-flex flex-column justify-content-center align-items-center sign-container">
      {console.log(session)}
      {
        session ? 
        <>
          <h1>Welcome {session.user.name}</h1>
          <button onClick={handleSignOut}>Sign out</button>
        </>: 
        <>
          <h1>Sign in</h1>
          <button onClick={handleSignIn} className="btn btn-primary">Sign in right now</button>
        </>
      }
    </div>
  )
}
export default Home