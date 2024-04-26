import React, { MouseEventHandler, useState } from "react"
interface BtnProps {
  msg: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Btn: React.FC<BtnProps> = ({ msg, onClick }) => {
  return (
    <button
      className="border-2 border-blue-500 rounded-md hover:border-red-500"
      onClick={onClick} >{msg}</button>
  )
}

export default function BtnDemo() {
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const handleButtonClick = (msg: string) => {
    setClickedButton(msg)
  }
  return (
    <>
      <Btn msg="Play" onClick={() => handleButtonClick('Play')} />
      <Btn msg="Upload" onClick={() => handleButtonClick('Upload')} />
      <p>result: {clickedButton}</p>
    </>)
}