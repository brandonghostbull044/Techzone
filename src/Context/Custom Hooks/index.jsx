import React from "react"
import { useAuth0 } from "@auth0/auth0-react";


function useUser(myOrders) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [currentUser, setCurrentUser] = React.useState(undefined);
  const nUser = user;

  React.useEffect(() => {
    if (isAuthenticated) {
      let name = nUser.name;
      let email = nUser.email;
      let picture = nUser.picture;
      let nickname = nUser.nickname;
      let sub = nUser.sub;
      let email_verified = nUser.email_verified;
      let orders = myOrders;
      let newUser = {name: name, email: email, picture: picture, nickname: nickname, sub: sub, email_verified: email_verified, orders: orders}
      setCurrentUser(newUser);
    } else {
      setCurrentUser(undefined);
    }
  }, [myOrders, isAuthenticated]);
  return { currentUser, loginWithRedirect, logout };
}

function useLocalStorage(initialValue) {
    const [info, setinfo] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      const localStorageinfo = localStorage.getItem("USERSV1");
      let parsedinfo;

      try {
        if (!localStorageinfo) {
          localStorage.setItem("USERSV1", JSON.stringify(initialValue));
          parsedinfo = initialValue;
        } else {
          parsedinfo = JSON.parse(localStorageinfo);
          setinfo(parsedinfo);
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, []);
    const saveinfo = (newinfo) => {
      localStorage.setItem("USERSV1", JSON.stringify(newinfo));
      setinfo(newinfo);
    };

    return {info, saveinfo, loading, error};
  }

export { useLocalStorage, useUser };