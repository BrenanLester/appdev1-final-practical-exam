import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

function App() {
  return window.location.pathname === '/login' ? <Login /> : <SignUp />
}

export default App
