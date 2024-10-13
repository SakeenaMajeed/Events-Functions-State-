import React from "react";

const Client = () => {
  const sayHello = (name) => {
    alert(`hello ${name}`);
  };
  return (
    <>
      <button onClick={() => alert("sakeena")}>click me</button> <br /> <br />
      <button onClick={() => sayHello(`sakeena`)}>click me</button>
    </>
  );
};

export default Client;
