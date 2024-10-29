import logo from './logo.svg';
import './App.css';
import SignUp from './Componets/SignUp';
import Login from './Componets/Login';
import { Flex } from 'antd';
import ShowData from './Componets/ShowData';

function App() {
  return (
    <div className='App' style={{ backgroundColor: 'white', display: 'flex', flexDirection:'column', justifyContent: 'center',  alignItems: 'center' }}>

      <Login />
      <br />
      <br />

      <SignUp />

      <br>
      </br><br/>

      <ShowData/>
    </div>
  );
}

export default App;
