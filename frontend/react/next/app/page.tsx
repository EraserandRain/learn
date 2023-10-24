'use client'

import { useState } from "react"

const Btn = (props) => {
  return (
    <button className="border-2 border-blue-500 rounded-md hover:border-red-500">{props.msg}</button>
  )
}

export default function App() {
  const [clickedButton, setClickedButton] = useState(null);
  const handleButtonClick = (msg) => {
    setClickedButton(msg)
  }
  return (
    <>
      <Btn msg="next" onClick={() => handleButtonClick('next')} />
      <Btn msg="next2" onClick={() => handleButtonClick('next2')} />
      <p>result: {clickedButton}</p>
    </>)
}

