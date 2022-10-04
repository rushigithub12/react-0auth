import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <article>
            {user?.picture && <img style={{ height: "5rem", width: "5rem" }} src={user.picture} alt={user?.nickname} />}
            <h2>{user?.nickname}</h2>
            <ul>
                {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
            </ul>
        </article>
    )
  )
}

export default Profile