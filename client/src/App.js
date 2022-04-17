import './App.css';
import Landing from './components/landing/Landing';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/register/Register';
import {withStore} from 'react-context-hook'

const initialState = {
  clubData: '',
  selected: '',
  user: [],
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default withStore(App, initialState);
