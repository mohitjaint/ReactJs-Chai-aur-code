import './App.css'
import Login from './Components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'

function App() {
  return (
   <UserContextProvider>
    <Login />
    <Profile />

   </UserContextProvider>  )
}

export default App
