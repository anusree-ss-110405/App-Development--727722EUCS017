import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Loginpage from './Components/Login';
import SignUp from './Components/SignUp';
import Nav from './Components/Nav';
// import Footer from './Components/Footer';
// import MainPage from './Components/MainPage';
import True5G from './Components/True5G';
import JtelFiber from './Components/JtelFiber';
import AirFiber from './Components/AirFiber';
import Business from './Components/Business';
import CustomerSupport from './Components/CustomerSupport';
import Devices from './Components/Devices';
import Apps from './Components/Apps';
import Page from './Components/Page';
import Supports from './Components/Supports';
import Image1 from './Components/Image1';
import LoginAdmin from './Components/LoginAdmin';
import AdminDashboard from './Components/AdminDashboard';
import Jio from './Components/Jio';
import Airtel from './Components/Airtel';
import BSNL from './Components/BSNL';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Nav/>
      <Routes>
      <Route path='/' element={<Page/>}></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/mobile' element={<Image1/>}></Route>
      <Route path='/true5g' element={<True5G/>}></Route>
      <Route path='/jtelfiber' element={<JtelFiber/>}></Route>
      <Route path='/airfiber' element={<AirFiber/>}></Route>
      <Route path='/business' element={<Business/>}></Route>
      <Route path='/devices' element={<Devices/>}></Route>
      <Route path='/apps' element={<Apps/>}></Route>
      <Route path='/support' element={<Supports/>}></Route>
      <Route path='/customersupport' element={<CustomerSupport/>}></Route>
      <Route path='/admin' element={<LoginAdmin/>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/airtel' element={<Airtel/>}></Route>
      <Route path='/jio' element={<Jio/>}></Route>
      <Route path='/bsnl' element={<BSNL/>}></Route>

      </Routes>
      
    </BrowserRouter>
    
    </div>

  )
  
}
export default App;