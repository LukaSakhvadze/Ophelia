import { Route,Routes } from 'react-router-dom';
import AppCss from './App.css'
import Heading from './ComponentsJs/Heading';
import Videos from './ComponentsJs/Videos';
import History from './ComponentsJs/History';
import Menus from './ComponentsJs/Menus';
import Gallery from './ComponentsJs/Gallery';
import Press from './ComponentsJs/Press';
import LocationAndHours from './ComponentsJs/LocationAndHours';
import Contact from './ComponentsJs/Contact';
import Footer from './ComponentsJs/Footer';
import EmailSignup from './ComponentsJs/EmailSignup';
import Reservations from './ComponentsJs/Reservations';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Heading></Heading>}></Route>
          <Route path='EmailSignup' element={<EmailSignup></EmailSignup>}></Route>
          <Route path='Reservations' element={<Reservations></Reservations>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Videos></Videos>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<History></History>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Menus></Menus>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Gallery></Gallery>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Press></Press>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<LocationAndHours></LocationAndHours>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Contact></Contact>}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Footer></Footer>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
