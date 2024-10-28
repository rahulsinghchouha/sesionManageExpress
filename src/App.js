import logo from './logo.svg';
import './App.css';
import SignUp from './Componets/SignUp';
import Login from './Componets/Login';
import { Flex } from 'antd';

function App() {
  return (
    <div className='App' style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>

      <Login />
      <br />
      <br />

      <SignUp />
    </div>
  );
}

export default App;
