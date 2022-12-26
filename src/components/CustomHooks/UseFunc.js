import { useEffect, useState } from "react";

let cacheData = {};
const useFunc = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cacheData[`${id}`]) {
      setUser(cacheData[`${id}`]);
      return;
    }
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        cacheData[`${id}`] = data;
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleInc = () => {
    if (id < 10) {
      setId((prev) => prev + 1);
    }
  };
  const handleDec = () => {
    if (id !== 1) {
      setId((prev) => prev - 1);
    }
  };
  return {id, user, loading, handleDec, handleInc};
};
export default useFunc