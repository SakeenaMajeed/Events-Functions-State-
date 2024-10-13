

import React, { useState } from 'react'

const State = () => {
    const [firstName , setFirstName] = useState("manahil")
    const changeName = () => {
        setFirstName((preName) => preName === "manahil" ? "sakeena" : "manahil")
    }
  return (
    <div>
        <h2>my name is:{firstName} </h2>
        <button onClick={changeName}>clickme</button>
    </div>
  )
}

export default State