import { useState } from 'react'
import yellow_girl from './assets/หัวเหลืองgurl.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import About_Us from "./About_Us";
import What_We_Do from "./What_We_Do";


function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ overflowY: 'scroll'}}>
      <div style={{position: 'absolute', top: '55%', left: '25%', transform: 'translate(-50%, -50%)', width: '400px', textAlign: 'left'}}>
        <h1 style={{color: '#005232'}}>Empowering Thai Youth to lead Climate Action</h1>
        <h2 style={{color: '#30964D'}}>We're a youth-led platform making climate
          education fun and far from boring.</h2>
     </div>

    <div style={{position: 'absolute', top: '10%', right: '5%', width: '600px'}}>
      <img src={yellow_girl} alt="Yellow Girl" style={{width: '100%', height: 'auto'}}/>
    </div>
    </div>
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
      </Routes>
    </Router>
  )
}



export default App
