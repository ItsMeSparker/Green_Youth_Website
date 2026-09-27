import yellow_girl from './assets/หัวเหลืองgurl.png';
import gathering from './assets/gathering.png';
import jomquan from './assets/JomQuan.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import About_Us from "./About_Us";
import What_We_Do from "./What_We_Do";
import Get_Involved from "./Get_Involved";

function Home() {
  return (
    <>
    <div className="home-hero">
      {/* Left Column: Text Content */}
      <div className="hero-copy">
        <h1>
          Empowering Thai Youth to lead Climate Action
        </h1>
        <h2>
          We're a youth-led platform making climate education fun and far from boring.
        </h2>
      </div>

      {/* Right Column: Illustration */}
      <div className="hero-art">
        <img 
          src={yellow_girl} 
          alt="Yellow Girl" 
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

        <div className="scrollmenu">
          <a>UNESCAP</a>
          <a>EUROPEAN UNION</a>
          <a>UNDP</a>
          <a>NEW WAVE</a>
          <a>CLIMATE FOUNDATIONs</a>
        </div>
      </div>
      <div className="impact-grid">
        <div className="round_frame"> <g>250,000+</g> <b>People reached through our media</b> </div>
        <div className="round_frame"> <g>4,100+</g> <b>Youth engaged directly through events</b> </div>
        <div className="round_frame"> <g>100+</g> <b>Schools across Thailand reached</b> </div>
        <div className="round_frame"> <g>20+</g> <b>Countries reached globally</b> </div>

      </div>

      <div className="who-we-are">
        <div className="green_round_frame">
          <h3 style={{ color: '#005232', margin: 0, fontSize: '16px', textAlign: 'center' }}>Take Action Today</h3>
        </div>
        <div className="who-copy">
                <h1 style={{ color: '#005232', fontWeight: 800, marginBottom: '20px' }}> Who We Are </h1>
                <h3 style={{ color: '#3F4942', fontWeight: 400, margin: 0, lineHeight: '1.5', width: '100%', textAlign: 'center'}}> 
                    Green Youth Thailand, founded in early 2022, is a youth led environmental organization
 making climate education more accessible and engaging for Thai youth. We share climate stories
 through media, creative content, and hands-on initiatives that connect environmental issues to everyday life.
                </h3>
            </div>
      </div>
      <div className="gathering-art">
        <img 
          src={gathering} 
          alt="gathering" 
        />
      </div>


      <div className = "the-seed-of-change">
        <div>
          <img style = {{flex: 1, maxHeight: '380px', borderRadius: '30px'}}
          src={jomquan} 
          alt="jomquan" 
        />
        </div>

        <div classname = "text-container">
            <div className="green_round_frame">
              <h3 style={{ color: '#005232', margin: 0, fontSize: '16px', fontWeight: 'bold'}}>Our Origin Story</h3>
            </div>
            <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1, marginTop: 10}}>
              <h1 style = {{ color: '#191C1C', fontSize: '56px', fontWeight: 800, margin: 0}}> <span> The Seed </span> </h1>
              <h1 style = {{ color: '#005232', fontSize: '56px', fontWeight: 800, margin: 0}}>  <span> of Change </span> </h1>
            </div>
            <div >
              <h3 style = {{color: '#3F4A3E', textAlign: 'left', fontSize: '16px', fontWeight: 400}}>In our first two years (2022 – 2023), we built ourselves as an approachable climate media platform, creating a variety of 
                  content around basic climate knowledge. We also tried new, creative ways to share climate news so it felt more engaging
                  and relevant. Our goal has always been to encourage youth
                  to join the climate movement by showing that environmentalism can be fun, relatable, and part of everyday life.

                  In 2024, we reached a turning point. After mostly communicating one way, we noticed a growing disconnect among youth.</h3>
              </div>
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
