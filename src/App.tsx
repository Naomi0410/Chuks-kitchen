import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RootLayout from './layouts/RootLayout'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Explore from './pages/Explore'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth pages - no navbar, has footer */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Main pages - has navbar and footer */}
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/cart" element={<Cart />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App