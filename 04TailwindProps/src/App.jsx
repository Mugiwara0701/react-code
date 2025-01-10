import React from "react";
import Card from "./components/Card";

function App() {
  const myArr = {
    name: "akshatN",
    age: 21
  }
  return (
    <>
      <div className="flex flex-row gap-3 mx-10">
      <Card  username="akshat" text="fkdjkfkdj" /> 
      <Card  username ="Nautiyal" />
      </div>
    </>
  );
}

export default App;
