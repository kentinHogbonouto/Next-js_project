import { getSession } from "next-auth/react";

export default async (req, res) => {
    const session = await getSession({ req });

    if(session){
        res.json({
            content: "access"
        })
    }else{
        res.json({
            content: "forbiden"
        })
    }
}