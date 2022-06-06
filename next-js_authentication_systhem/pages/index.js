import React, {Fragment} from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
const Home = () => {
  const {data: session} = useSession();
  const {push} = useRouter();

  const handleSignOut = async () => {
    const signOutRedirect = await signOut({redirect: false, callbackUrl: '/auth/registration/'});
    push(signOutRedirect.url)
  } 

  return(
    <React.Fragment>
      <h1>Welcome to my website</h1>
      {console.log(session)}
      {
        session ? 
        <>
          <h1>Welcome {session.user.name}</h1>
          <button onClick={handleSignOut}>Sign out</button>
        </>: 
        <>
          <h1>Not sign in yet</h1>
          <button onClick={signIn}>Sign in right now</button>
        </>
      }
    </React.Fragment>
  )
}
export default Home