import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Register/> */}
    {/* <Login/> */}
     <ChangePassword/>
    </div>
  );
}
export default App;
