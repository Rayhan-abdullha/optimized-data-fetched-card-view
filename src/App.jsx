import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";

let cacheData = {};
function App() {
  const [id, setId] = useState(1);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cacheData[`${id}`]){
        setUser(cacheData[`${id}`])
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

  return (
    <div className="container">
      <div className="card">
        <Card handleInc={handleInc} handleDec={handleDec} loading={loading} user={user} id={id}/>   
      </div>
    </div>
  );
}

export default App;
