import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import useFunc from "./components/CustomHooks/UseFunc";


function App() {
  const {id, user, loading, handleDec, handleInc} = useFunc()

  return (
    <div className="container">
      <div className="card">
        <Card handleInc={handleInc} handleDec={handleDec} loading={loading} user={user} id={id}/>   
      </div>
    </div>
  );
}

export default App;
