import { useEffect } from "react";
import useAuthContext from "../context/AuthContex";

export default function Home() {
    const { user, getUser } = useAuthContext();

    useEffect(() => {
        if (!user) {
            getUser();
        }
    });

    return (
        <div>
            <h1>Kezdőlap</h1>
            <p> {user?.name}</p>
        </div>
    );
}
