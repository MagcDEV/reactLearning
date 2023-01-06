import { Button } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const LoginPage = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
    <h1 className="text-4xl m-5">Login Page</h1>
    <hr />
    <pre aria-label="pre">
      {JSON.stringify(user, null, 3)}
    </pre>
    <Button 
      variant="contained"
      onClick={() => {setUser({name: "Manuel", job: "Developer"})}}>
      Set User
    </Button>
    </>
  )
}

export default LoginPage
