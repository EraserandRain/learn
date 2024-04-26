// `app/page.tsx` is the UI for the `/` URL

import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <p>
        <FaGithub style={{ display: "inline" }} /><span>Hello, Home page!</span>
      </p>
    </>
  )
}
