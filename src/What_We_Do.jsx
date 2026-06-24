import React from 'react';

function What_We_Do() {

    return (
        <>
            <div style = {{...styles.round_frame, alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
                <h3 style = {{color: '#005232'}}>Take Action Today</h3>
            </div>
            <div style= {{maxWidth: '600px', alignSelf: 'center', marginBottom: '150px'}}>
                <h1 style = {{color: '#005232 ', fontWeight: 800}}> Empower Change with Green Youth </h1>
                <h3 style = {{color: '#3F4942'}}> Whether you are a student, a community leader, or an organization, there are
                    multiple ways to collaborate and drive the climate movement forward. </h3>
            </div>


            <div style={{ minHeight: '200vh', display: 'flex', alignItems: 'center', 
                justifyContent: 'center',  flexDirection: 'row', padding: '40px 20px', 
                backgroundColor: '#FFFFFF', gap: '100px'}}>
                    <div>
                        <h1 style = {{color: '#005232 ', fontWeight: 700}}> Join The Movement </h1>
                        <h3 style = {{color: '#3F4942'}}> Be part of the frontline energy. We are building a global network of young
                            leaders committed to tangible climate justice and environmental restoration.</h3>
                    </div>

                    <div>
                        <h1 style = {{color: '#005232 ', fontWeight: 700}}> Collaborate With Us </h1>
                        <h3 style = {{color: '#3F4942'}}> Are you a school, non-profit, or corporate partner? We work together with
                        organizations to scale youth-led climate solutions and education.</h3>
                    </div>



            </div>
        </>
    )
}

const styles = {
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
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
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
}

export default What_We_Do

