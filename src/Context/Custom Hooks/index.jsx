import React from "react"



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
      localStorage.setinfo("USERSV1", JSON.stringify(newinfo));
      setinfo(newinfo);
    };
    console.log(info);

    return {info, saveinfo, loading, error};
  }

export { useLocalStorage };