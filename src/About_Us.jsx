import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import './index.css';


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
      
                    <h1 style={styles.title}>20+</h1>
                    
                    <h2 style={styles.subtitle}>Major Initiatives</h2>
                    
                    <p style={styles.bodyText}>
                        Covering 5 core themes from environmental education to sustainable innovation.
                    </p>
                </div>

                <div style={styles.card}>
                    <h1 style={{...styles.title, color: '#006B2D'}}>1,400+</h1>
                    
                    <h2 style={{...styles.subtitle, color: '#191C1C'}}>Youth Engaged</h2>
                    
                    <p style={styles.bodyText}>
                        Empowering change-makers through
                        workshops, rallies, and summits.
                    </p>
                </div>

                <div style={styles.card}>
                    <h1 style={{...styles.title, color: '#006B2D'}}>100+</h1>
                    
                    <h2 style={{...styles.subtitle, color: '#191C1C'}}>Schools</h2>
                    
                    <p style={styles.bodyText}>
                        Transforming awareness across Thailand
                        and 20+ countries globally.
                    </p>
                </div>
            </div>
        
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '40px' }}>
                <div style={styles.card}></div>
                <div style={styles.card}></div>
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
    padding: '40px',            // Inner spacing so text doesn't touch the edge
    width: '225px',             // The width of the square
    minHeight: '150px',         // Ensures it remains roughly square
    color: '#000000',           // Black text
    boxSizing: 'border-box',    // Keeps padding inside the width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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