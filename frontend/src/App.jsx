import React, { useEffect, useState } from "react";
import SignIn from "./login/login";
import Home from "./home/Home";
import axios from "axios";
const App = () => {
  const [user, setUser] = useState(null);
  const [otherUser, setOtherUser] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/users", {withCredentials: true})
    .then((res) => {
      setUser(res.data.user);
      setOtherUser(res.data.otherUser);
    })
    .catch(() => setUser(null));
  }, []);

  const updateUser = (data) =>{
    setUser(data);
  }

  const logoutHandler = async () => {
    await axios.get("http://localhost:8000/auth/logout", {withCredentials: true});
    setUser(null);
  }

  return (
    <div>
      {user ? 
      <Home logout={logoutHandler} user={user} otherUser={otherUser} modifyUser={updateUser}/> : 
      <SignIn/>
      }
    </div>
  );
};
export default App;
