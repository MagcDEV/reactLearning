import { Link, Route, Routes } from "react-router-dom"
import AboutPage from "./AboutPage"
import UserProvider from "./context/UserProvider"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import NavBar from "./NavBar"

const MainApp = () => {
  return (
    <UserProvider>
      <h1 className="text-4xl m-5">Main App</h1>
      <NavBar />
      <hr />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="home" element={ <HomePage /> } />
      </Routes>
    </UserProvider>

  )
}

export default MainApp
