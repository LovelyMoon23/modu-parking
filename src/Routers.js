import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './pages/Main'

const Routers = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routers
