import React, {Fragment} from "react"
import { useSession, signIn, signOut } from "next-auth/react"

const Home = () => {
  const {data: session} = useSession();
  return(
    <React.Fragment>
      <h1>Welcome to my website</h1>
      {console.log(session)}
      {
        session ? 
        <>
          <h1>Welcome {session.user.name}</h1>
          <button onClick={signOut}>Sign out</button>
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