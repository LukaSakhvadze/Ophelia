import { Route,Routes } from 'react-router-dom';
import AppCss from './App.css'
import Heading from './ComponentsJs/Heading';
import Videos from './ComponentsJs/Videos';
import History from './ComponentsJs/History';
import Menus from './ComponentsJs/Menus';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Heading></Heading>}></Route>
      </Routes>
      <Videos></Videos>
      <History></History>
      <Menus></Menus>
    </div>
  );
}

export default App;
