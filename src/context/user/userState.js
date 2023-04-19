import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const host = "http://localhost:5000"
  const userInitial = null
  const [user, setUser] = useState(userInitial)


  const getUser = async () => {
    // api call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json()
    console.log(json);
    setUser(json)
  }


  return (
    <UserContext.Provider value={{ user, getUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserState


