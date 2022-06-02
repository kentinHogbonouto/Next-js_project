import {useSession, signIn, signOut} from "next-auth/react";

const Token = () => {
    const { data } = useSession()
    const { accessToken } = data
    console.log(accessToken);

    return <span>{accessToken}</span>
}

export default Token