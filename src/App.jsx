import { useState } from 'react'
import yellow_girl from './assets/หัวเหลืองgurl.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import About_Us from "./About_Us";
import What_We_Do from "./What_We_Do";
import Get_Involved from "./Get_Involved";

function Home() {
  return (
    <>
    <div style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '40px',
      padding: '40px 5%',
      minHeight: 'calc(100vh - 70px)', // Full screen height minus header
      boxSizing: 'border-box',
      flexWrap: 'wrap' // Drops the image below text on mobile screens
    }}>
      
      {/* Left Column: Text Content */}
      <div style={{ flex: '1', minWidth: '500px', textAlign: 'left' }}>
        <h1 style={{ color: '#005232', fontSize: '3rem', margin: '0 0 20px 0', lineHeight: '1.2' }}>
          Empowering Thai Youth to lead Climate Action
        </h1>
        <h2 style={{ color: '#30964D', fontSize: '1.5rem', fontWeight: 'normal', lineHeight: '1.4', margin: 0 }}>
          We're a youth-led platform making climate education fun and far from boring.
        </h2>
      </div>

      {/* Right Column: Illustration */}
      <div style={{ flex: '1', minWidth: '400px', display: 'flex', justifyContent: 'center' }}>
        <img 
          src={yellow_girl} 
          alt="Yellow Girl" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>

      <div style={{
        border: '1px solid #BECABB4D',
        minHeight: '270px',
        boxSizing: 'border-box',
        padding: '40px 5%',
        alighnItems: 'center',
      }}>
        <p style = {{ color: '#3F4A3E', maxHeight: '15px', fontSize: '10px', fontWeight: '800', letterSpacing: '4px'}}>
          STRATEGIC GLOBAL PARTNERS
        </p>

        <div class = "scrollmenu" style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '5%', marginTop: '8%'}}>
          <a>UNESCAP</a>
          <a>EUROPEAN UNION</a>
          <a>UNDP</a>
          <a>NEW WAVE</a>
          <a>CLIMATE FOUNDATIONs</a>
        </div>
      </div>
      <div style={{
        backgroundColor: '#FEEDF0',
        minHeight: '280px',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        padding: '40px 5%',
        boxSizing: 'border-box'
      }}>
        <div class = "round_frame" style={{ width: '15%', height: '70%' }}> <p>People reached through our media</p> </div>
        <div class = "round_frame" style={{ width: '15%', height: '70%' }}> <p>Youth engaged directly through events</p> </div>
        <div class = "round_frame" style={{ width: '15%', height: '70%' }}> <p>Schools across Thailand reached</p> </div>
        <div class = "round_frame" style={{ width: '15%', height: '70%' }}> <p>Countries reached globally</p> </div>

      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_Us" element={<About_Us />} />
        <Route path="/What_We_Do" element={<What_We_Do />} />
        <Route path="/Get_Involved" element={<Get_Involved />} />
      </Routes>
    </Router>
  )
}



export default App
