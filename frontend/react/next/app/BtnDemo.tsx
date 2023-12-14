import { useState } from "react"

const Btn = (props) => {
  return (
    <button
      className="border-2 border-blue-500 rounded-md hover:border-red-500"
      onClick={props.onClick} >{props.msg}</button>
  )
}

export default function BtnDemo() {
  const [clickedButton, setClickedButton] = useState(null);
  const handleButtonClick = (msg) => {
    setClickedButton(msg)
  }
  return (
    <>
      <Btn msg="Play" onClick={() => handleButtonClick('Play')} />
      <Btn msg="Upload" onClick={() => handleButtonClick('Upload')} />
      <p>result: {clickedButton}</p>
    </>)
}