import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx';
import Travelform from './components/Travelform.jsx';
import QRpage from './components/QRpage.jsx';
import Paymentcomplete from './components/Paymentcomplete.jsx';
import Addmoneyform from './components/Addmoneyform.jsx';
import QRscanner from './components/QRscanner.jsx';
import Qrdata from './components/Qrdata.jsx';
import Qrexpired from './components/Qrexpired.jsx';
import Adminpaymentdone from './components/Adminpaymentdone.jsx';


function Rout() {
   // console.log("router working");
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/travelform" element={<Travelform/>}/>
        <Route path="/qrpage" element={<QRpage/>}/>
        <Route path="/paymentcomplete" element={<Paymentcomplete/>}/>
        <Route path="/addmoney" element={<Addmoneyform/>}/>   
        <Route path="/qrscanner" element={<QRscanner/>}/>   
        <Route path="/userconformation" element={<Qrdata/>}/>   
        <Route path="/qrexpire" element={<Qrexpired/>}/> 
        <Route path="/adminpayment" element={<Adminpaymentdone/>}/>    
      </Routes>
    </Router>
  );
}

export default Rout;
