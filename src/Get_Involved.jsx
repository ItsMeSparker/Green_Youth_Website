import React from 'react';
import Camera from './assets/Camera.png'
import Email from './assets/Email.png'

function Get_Involved(){
    return(
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '60px', padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{alignItems: 'flex-start', justifyContent: 'flex-start', padding: '30px', maxWidth: '50%'}}>
        
        <div style={styles.round_frame}>
                <h3 style={{ color: '#4E4447', margin: 0, fontSize: '16px' }}>IMPACT DRIVEN</h3>
        </div>
        <div style={{ maxWidth: '600px', textAlign: 'justify', margin: '10px' }}>
                <h1 style={{ color: '#005232', fontWeight: 800, marginBottom: '20px', textAlign: 'left' }}> Let's start a conversation.</h1>
                <h3 style={{ color: '#3F4942', fontWeight: 400, margin: 0, lineHeight: '1.5' }}> 
                    Whether you're looking to partner, volunteer, or 
                    just want to learn more about our climate initiatives, 
                    our team is here for the next generation.
                </h3>
                <h3 style = {{fontSize: '14px', fontWeight: 600, color: '#005232', marginBottom: 0}}>FOLLOW US</h3>
                <div style = {{height: 'min-content', display: 'flex', alignItems: 'center', gap: '0px 20px'}}>
                    <div style = {styles.circle}>
                        <div><img src={Camera} className='Camera' alt="Camera Icon" /></div>
                    </div>
                    <div style = {{flexDirection: 'column'}}>
                        <h2 style={{color:'#1C1B1B', fontSize: 28, fontWeight: 700, margin: 0}}>@greenyou.th</h2>
                        <p style = {{color: '#3F4942', fontSize: 14, fontWeight: 600, margin: 0}}>Instagram</p>
                    </div>
                </div>
                <h3 style = {{fontSize: '14px', fontWeight: 600, color: '#005232', marginBottom: 0}}>Official Email</h3>
                <div style = {{height: 'min-content', display: 'flex', alignItems: 'center', gap: '0px 20px'}}>
                    <div style = {styles.circle}>
                        <div><img src={Email} className='Email' alt="Email Icon" /></div>
                    </div>
                    <div style = {{flexDirection: 'column'}}>
                        <h2 style={{color:'#1C1B1B', fontSize: 28, fontWeight: 700, margin: 0}}>hello@greenyouth.org</h2>
                        <p style = {{color: '#3F4942', fontSize: 14, fontWeight: 600, margin: 0}}>Email Address</p>
                    </div>
                </div>
        </div>
    </div> 

    {/* --- RIGHT SIDE: The Pink Form Card --- */}
            <div style={styles.card}>
                {/* Row 1: Name and Email */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <label style={styles.label}>Name</label>
                        <input type="text" placeholder="Jane Doe" style={styles.input} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <label style={styles.label}>Email</label>
                        <input type="email" placeholder="jane@example.com" style={styles.input} />
                    </div>
                </div>
                
                {/* Row 2: Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                    <label style={styles.label}>Subject</label>
                    <input type="text" placeholder="How can we help?" style={styles.input} />
                </div>

                {/* Row 3: Message */}
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                    <label style={styles.label}>Message</label>
                    <textarea placeholder="Write your message here..." style={styles.textarea}></textarea>
                </div>

                {/* Submit Button */}
                <button style={styles.button}>
                    Send Message
                    {/* Inline SVG for the arrow icon to match the design */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                        <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
    </div>
    )
}

const styles = {
    round_frame: {
        borderRadius: '30px',
        maxWidth: '150px',
        backgroundColor: '#EBDCDF',
        padding: '5px 15px 5px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60px'
    },
    circle: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        backgroundColor: '#005232',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        borderRadius: '40px',
        maxWidth: '500px',
        backgroundColor: '#FCF3F5', // Light pink from the image
        padding: '50px 40px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
    },
    label: {
        fontSize: '14px',
        fontWeight: '700',
        color: '#4A554D', // Dark grey/greenish text for labels
        marginBottom: '8px'
    },
    input: {
        borderRadius: '25px',
        border: '1px solid #D9D9D9',
        padding: '15px 20px',
        fontSize: '15px',
        color: '#333',
        backgroundColor: '#FFFFFF',
        outline: 'none',
        fontFamily: 'inherit'
    },
    textarea: {
        borderRadius: '25px',
        border: '1px solid #D9D9D9',
        padding: '20px',
        fontSize: '15px',
        color: '#333',
        backgroundColor: '#FFFFFF',
        outline: 'none',
        fontFamily: 'inherit',
        minHeight: '140px',
        resize: 'none' // Disables the native drag-to-resize corner
    },
    button: {
        backgroundColor: '#005232',
        color: 'white',
        borderRadius: '30px',
        border: 'none',
        padding: '18px 20px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'inherit',
        transition: 'opacity 0.2s'
    }
}

export default Get_Involved