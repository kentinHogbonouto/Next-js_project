import React, {Fragment} from "react"
import { useSession, signIn } from "next-auth/react"

const Home = () => {
  const {data: session} = useSession();
  return(
    <React.Fragment>
      <h1>Welcome to my website, feel free to login using one of the ways available to you !</h1>

      {session ? <h1>You are sign in</h1>: <>
        <h1>Not sign in yet</h1>
        <button onClick={signIn}>Sign in right now</button>
      </>}
    </React.Fragment>
  )
}
export default Home