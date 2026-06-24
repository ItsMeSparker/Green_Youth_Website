import React from 'react';

function What_We_Do() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', overflowX: 'hidden' }}>
            
            {/* Top Header Section */}
            <div style={styles.round_frame}>
                <h3 style={{ color: '#005232', margin: 0, fontSize: '16px' }}>Take Action Today</h3>
            </div>
            
            <div style={{ maxWidth: '600px', textAlign: 'center', margin: '40px 20px 80px 20px' }}>
                <h1 style={{ color: '#005232', fontWeight: 800, marginBottom: '20px' }}> Empower Change with Green Youth </h1>
                <h3 style={{ color: '#3F4942', fontWeight: 400, margin: 0, lineHeight: '1.5' }}> 
                    Whether you are a student, a community leader, or an organization, there are
                    multiple ways to collaborate and drive the climate movement forward. 
                </h3>
            </div>

            {/* Two-Column Section */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', /* Aligns both columns to the top */
                justifyContent: 'center', 
                flexDirection: 'row', 
                flexWrap: 'wrap',         /* Allows wrapping on smaller screens */
                padding: '100px 3% 100px 3%', 
                width: '100%',
                boxSizing: 'border-box',
                gap: '60px',               /* Spacing between the two main columns */
                backgroundColor: '#FFFFFF',
            }}>
                
                {/* Left Column: Join The Movement */}
                <div style={{ flex: 1, minWidth: '320px', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div>
                        <h1 style={{ color: '#005232', fontWeight: 700, margin: '0 0 15px 0' }}> Join The Movement </h1>
                        <p style={{ color: '#3F4942', fontSize: '16px', lineHeight: '1.5', margin: 0 }}> Be part of the frontline energy. We are building a global network of young leaders committed to tangible climate justice and environmental restoration.</p>
                    </div>
                    
                    {/* Youth Climate Circle */}
                    <div style={styles.card}>
                        <div style={styles.cardTitle}> Youth Climate Circle </div>
                        <p style={styles.bodyText}> Our signature advocacy program for ages 15-24. Receive mentorship, access policy toolkits, and connect with fellow changemakers in your region.</p>
                        
                        <a href="#apply" style={styles.link}>
                            Apply for the Circle 
                            <span style={styles.arrow}>➔</span>
                        </a>
                    </div>

                    {/* Volunteer Force */}
                    <div style={styles.card}>
                        <div style={styles.cardTitle}> Volunteer Force </div>
                        <p style={styles.bodyText}> From graphic design to local tree planting, your skills are needed. Join our database to be notified of high-impact opportunities near you.</p>
                        
                        <a href="#apply" style={styles.link}>
                            Register to Volunteer
                            <span style={styles.arrow}>➔</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Collaborate With Us */}
                <div style={{ flex: 1, minWidth: '320px', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div>
                        <h1 style={{ color: '#005232', fontWeight: 700, margin: '0 0 15px 0' }}> Collaborate With Us </h1>
                        <p style={{ color: '#3F4942', fontSize: '16px', lineHeight: '1.5', margin: 0 }}> Are you a school, non-profit, or corporate partner? We work together with organizations to scale youth-led climate solutions and education.</p>
                    </div>

                    <div style={styles.thinBox}>
                        <h3 style={{ color: '#005232', fontSize: '20px', margin: '0 0 10px 0' }}>Workshops & Training</h3>
                        <p style={{ color: '#3F4942', fontSize: '16px', margin: 0, lineHeight: '1.5' }}>Request our certified trainers for climate literacy and advocacy workshops in your institution.</p>
                    </div>

                    <div style={styles.thinBox}>
                        <h3 style={{ color: '#005232', fontSize: '20px', margin: '0 0 10px 0' }}>Speaking Engagements</h3>
                        <p style={{ color: '#3F4942', fontSize: '16px', margin: 0, lineHeight: '1.5' }}>Invite our youth ambassadors to share insights on the future of climate leadership at your summit.</p>
                    </div>

                    <div style={styles.thinBox}>
                        <h3 style={{ color: '#005232', fontSize: '20px', margin: '0 0 10px 0' }}>Project Co-creation</h3>
                        <p style={{ color: '#3F4942', fontSize: '16px', margin: 0, lineHeight: '1.5' }}>Partner on large-scale reforestation, urban farming, or circular economy projects globally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    round_frame: {
        borderRadius: '30px',
        backgroundColor: '#0052321A',
        padding: '10px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60px'
    },
    card: {
        backgroundColor: '#F7F5F3', 
        borderRadius: '30px',       
        padding: '35px',            // Increased padding for breathing room
        width: '100%',              // Uses 100% of parent flex container
        boxSizing: 'border-box',    
        display: 'flex',
        border: '1px solid #BEC9BF4D',
        flexDirection: 'column',
    },
    cardTitle: {
        color: '#005232',           
        fontWeight: '700',
        fontSize: '28px',
        margin: '0 0 15px 0',       
        letterSpacing: '-0.5px',
    },
    bodyText: {
        color: '#3F4942',           
        fontSize: '16px',
        fontWeight: '400',          
        lineHeight: '1.5',          
        margin: '0 0 25px 0',       
        textAlign: 'left',          
    },
    link: {
        color: '#134E33',
        fontSize: '16px',
        fontWeight: '600',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content',
        marginTop: 'auto',          // Pushes the link to the bottom if cards vary in height
    },
    arrow: {
        marginLeft: '8px',
        fontSize: '18px',
        transition: 'transform 0.2s ease',
    },
    thinBox:{
        borderRadius: '30px',       // Matched radius to the left column for consistency
        padding: '30px',            // Even padding inside the box
        width: '100%',              // Fluid width
        boxSizing: 'border-box',    
        display: 'flex',
        border: '1px solid #BEC9BF',
        flexDirection: 'column',
    }
}

export default What_We_Do

