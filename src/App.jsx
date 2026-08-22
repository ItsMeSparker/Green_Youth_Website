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
        alignItems: 'center',
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
        minHeight: '240px',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        padding: '40px 5%',
        boxSizing: 'border-box'
      }}>
        <div class = "round_frame" style={{ width: '290px', height: '140px', borderRadius: '15px' }}> <g>250,000+</g> <b>People reached through our media</b> </div>
        <div class = "round_frame" style={{ width: '290px', height: '140px', borderRadius: '15px' }}> <g>4,100+</g> <b>Youth engaged directly through events</b> </div>
        <div class = "round_frame" style={{ width: '290px', height: '140px', borderRadius: '15px' }}> <g>100+</g> <b>Schools across Thailand reached</b> </div>
        <div class = "round_frame" style={{ width: '290px', height: '140px', borderRadius: '15px' }}> <g>20+</g> <b>Countries reached globally</b> </div>

      </div>

      <div style={{
        border: '1px solid #BECABB4D',
        minHeight: '200px',
        boxSizing: 'border-box',
        padding: '40px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

      }}>
        <div className="green_round_frame" style={{ width: '15%', minWidth: '140px', borderRadius: '20px', margin: 0 }}>
          <h3 style={{ color: '#005232', margin: 0, fontSize: '16px', textAlign: 'center' }}>Take Action Today</h3>
        </div>
        <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', margin: '5px auto 80px' }}>
                <h1 style={{ color: '#005232', fontWeight: 800, marginBottom: '20px' }}> Who We Are </h1>
                <h3 style={{ color: '#3F4942', fontWeight: 400, margin: 0, lineHeight: '1.5', width: '100%', textAlign: 'center'}}> 
                    Green Youth Thailand, founded in early 2022, is a youth led environmental organization
 making climate education more accessible and engaging for Thai youth. We share climate stories
 through media, creative content, and hands-on initiatives that connect environmental issues to everyday life.
                </h3>
            </div>
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
