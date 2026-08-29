import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import './index.css';
import Rocket from './assets/Rocket.png';
import ShakeHand from './assets/ShakeHand.png';
import Tree from './assets/Tree.png';
import People from './assets/People.png'
import Earth from './assets/Earth.png'

function About_Us() {
    const [count, setCount] = useState(0);

  return (
    <>
    <div>
        {/* First Section */}
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'left', padding: '40px 20px'}}>
            <div style={{width: '600px', textAlign: 'left'}}>
                <h1 style={{color: '#005232', fontWeight: 'bold'}}>Our Work in Action</h1>
                <h3 style={{color: 'black', fontWeight: 200}}> We bridge the gap between climate awareness and meaningful action through youth-led initiatives
                        that inspire, educate, and mobilize communities for a sustainable future.</h3>
            </div>
        </div>

        {/* Second Section */}
        <div style={{ minHeight: '200vh', display: 'flex', alignItems: 'center', 
            justifyContent: 'normal',  flexDirection: 'column', padding: '40px 20px', 
            backgroundColor: '#FEEDF0'}}>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginBottom: '40px' }}>
                <div style={{...styles.card, backgroundColor: '#30964D', color: '#FFFFFF'}}>

                    <div style={styles.iconPlaceholder}> 
                      <img 
                        src={Rocket} 
                        alt="Rocket" 
                        style={{ width: '10%', height: 'auto', display: 'block' }}
                        />
                    </div>
                    <h1 style={{...styles.title, textAlign: 'left'}}>20+</h1>
                    
                    <h2 style={{...styles.subtitle, textAlign: 'left'}}>Major Initiatives</h2>
                    
                    <p style={{...styles.bodyText, textAlign: 'left'}}>
                        Covering 5 core themes from environmental education to sustainable innovation.
                    </p>
                </div>

                <div style={styles.card}>
                    <div style={styles.iconPlaceholder}> 
                      <img 
                        src={People} 
                        alt="People" 
                        style={{ width: '10%', height: 'auto', display: 'block' }}
                        />
                    </div>
                    <h1 style={{...styles.title, color: '#006B2D', textAlign: 'left'}}>1,400+</h1>
                    
                    <h2 style={{...styles.subtitle, color: '#191C1C', textAlign: 'left'}}>Youth Engaged</h2>
                    
                    <p style={{...styles.bodyText, textAlign: 'left'}}>
                        Empowering change-makers through
                        workshops, rallies, and summits.
                    </p>
                </div>

                <div style={styles.card}>
                    <div style={styles.iconPlaceholder}> 
                      <img 
                        src={Earth} 
                        alt="Earth" 
                        style={{ width: '10%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <h1 style={{...styles.title, color: '#006B2D', textAlign: 'left'}}>100+</h1>
                    
                    <h2 style={{...styles.subtitle, color: '#191C1C', textAlign: 'left'}}>Schools</h2>
                    
                    <p style={{...styles.bodyText, textAlign: 'left'}}>
                        Transforming awareness across Thailand
                        and 20+ countries globally.
                    </p>
                </div>
            </div>
        
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '40px' }}>



                <div style={{...styles.card, width: '500px'}}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', margin: '20px'  }}>
                    <img 
                          src={Tree} 
                          alt="Tree" 
                          style={{ width: '8 %', height: 'auto', display: 'block' }}
                          />
                    <p style={{...styles.bodyText, textAlign: 'left', margin: 0}}>
                        Environmental Actions
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px', margin: '20px', alignSelf: 'center' }}>
                      <div style ={{flexDirection: 'column', alignItems: 'center'}}>
                          <h2 style = {{color: '#006B2D', fontWeight: 700, fontSize: '24px'}}>3,000</h2>
                          <p style = {{color: '#3F4A3E', fontWeight: 700, fontSize: '10px'}}>MANGROVES</p>
                        </div>
                      <div style ={{flexDirection: 'column', alignItems: 'center'}}>
                          <h2 style = {{color: '#006B2D', fontWeight: 700, fontSize: '24px'}}>4+</h2>
                          <p style = {{color: '#3F4A3E', fontWeight: 700, fontSize: '10px'}}>UPCYCLING</p>
                        </div>
                      <div style ={{flexDirection: 'column', alignItems: 'center'}}>
                          <h2 style = {{color: '#006B2D', fontWeight: 700, fontSize: '24px'}}>500+</h2>
                          <p style = {{color: '#3F4A3E', fontWeight: 700, fontSize: '10px'}}>KIDS TAUGHT</p>
                        </div>
                  </div>
                </div>


                <div style={{...styles.card, width: '500px'}}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', margin: '20px'  }}>
                  <img 
                        src={ShakeHand} 
                        alt="ShakeHand" 
                        style={{ width: '6%', height: 'auto', display: 'block' }}
                        />
                    <p style={{...styles.bodyText, textAlign: 'left', margin: 0}}>
                        Strategic Collaborators
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', margin: '10px', alignSelf: 'center' }}>
                      <div style = {styles.transparent_box}><p style = {{fontWeight: 700, fontSize: '12px', color: '#191C1C', letterSpacing: 0, lineHeight: '1.2'}}>UNESCAP</p></div>
                      <div style = {styles.transparent_box}><p style = {{fontWeight: 700, fontSize: '12px', color: '#191C1C', letterSpacing: 0, lineHeight: '1.2'}}>European Union</p></div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', margin: '10px', alignSelf: 'center' }}>
                    <div style = {styles.transparent_box}><p style = {{fontWeight: 700, fontSize: '12px', color: '#191C1C', letterSpacing: 0, lineHeight: '1.2'}}>Sector Experts</p></div>
                      <div style = {styles.transparent_box}><p style = {{fontWeight: 700, fontSize: '12px', color: '#191C1C', letterSpacing: 0, lineHeight: '1.2'}}>BKK Governor</p></div>
                    
                  </div>
                </div>




            </div>
            
        </div>
    </div>
    </>
  )
}

const styles = {
  card: {
    backgroundColor: '#FFFFFF', // The white color
    borderRadius: '30px',       // Soft, rounded corners
    padding: '25px',            // Inner spacing so text doesn't touch the edge
    width: '350px',             // The width of the square
    maxHeight: '240px',         // Ensures it remains roughly square
    color: '#000000',           // Black text
    boxSizing: 'border-box',    // Keeps padding inside the width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  round_frame: {
        borderRadius: '30px',
        padding: '20px',
        backgroundColor: '#0052321A',
        width: '180px',
        height: '25px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center', 
        marginTop: '50px'
    },
    transparent_box: {
      borderRadius: '8px',
      padding: '8px 16px',
      height: '24px',
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      backgroundColor: 'transparent'
    }
    ,
  iconPlaceholder: { 
    fontSize: '32px',
    marginBottom: '10px'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '0 0 10px 0' // Removes default browser margins
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'semiBold',
    margin: '0 0 20px 0'
  },
  bodyText: {
    fontSize: '14px',
    lineHeight: '1.5',
    margin: '0'
  }
};


export default About_Us