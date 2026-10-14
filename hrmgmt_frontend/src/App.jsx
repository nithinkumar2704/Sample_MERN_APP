import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home' 
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Services from './pages/Services'
import {Routes, Route} from 'react-router-dom';  //importing Routes and Route from react-router-dom
function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
    <Route path="/" element={<Home></Home>} > </Route>
    <Route path="/contact" element={<Contact></Contact>} ></Route>
    <Route path="/about" element={<About></About>} > </Route>
    <Route path="/login" element={<Login></Login>} > </Route>
    <Route path="/services" element={<Services></Services>} > </Route>
    </Routes>
    <Footer></Footer>
    </div>
  )
}
export default App
