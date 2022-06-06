import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp