import { Button } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"


const HomePage = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
    <h1 className="text-4xl m-5">Home Page</h1>
    <hr />
  <div className="m-5 rounded">
    <pre aria-label="pre">
      {JSON.stringify(user, null, 3)}
    </pre>
  </div>
    </>
  )
}

export default HomePage
