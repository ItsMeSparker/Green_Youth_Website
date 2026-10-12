import { useState } from 'react';
import { Turnstile } from "react-turnstile";
import Camera from './assets/Camera.png'
import Email from './assets/Email.png'

function Get_Involved(){

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: ""
    });

    const [turnstileToken, setTurnstileToken] = useState("");
    const [turnstileWidgetKey, setTurnstileWidgetKey] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({
    type: "",
    message: ""
    });

    function handleFormChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
        ...previous,
        [name]: value
    }));
    }

    async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!turnstileToken) {
        setStatus({
        type: "error",
        message: "Please complete the security verification."
        });
        return;
    }

    const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

    if (!endpoint) {
        setStatus({
        type: "error",
        message: "The form endpoint is not configured."
        });
        return;
    }

    setIsSubmitting(true);

    try {
        const response = await fetch(endpoint, {
        method: "POST",
        redirect: "follow",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            website: formData.website,
            turnstileToken: turnstileToken
        })
        });

        const result = await response.json();

        if (!response.ok || result.ok !== true) {
        throw new Error(
            result.message || "Your message could not be submitted."
        );
        }

        setStatus({
        type: "success",
        message: "Thank you! Your message has been received."
        });

        setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: ""
        });

    } catch (error) {
        console.error("Contact form submission failed:", error);

        setStatus({
        type: "error",
        message:
            error instanceof Error &&
            error.message !== "Failed to fetch"
            ? error.message
            : "We could not confirm your submission. Please try again later."
        });

    } finally {
        setIsSubmitting(false);
        setTurnstileToken("");

        // The previous CAPTCHA token cannot be reused.
        setTurnstileWidgetKey((previous) => previous + 1);
    }
    }

    return(
    <>
    <div className="get-involved-page" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '60px', padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
    <div className="contact-info" style={{alignItems: 'flex-start', justifyContent: 'flex-start', padding: '30px', maxWidth: '50%'}}>
        
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
            
    <form
    className="contact-form"
    style={styles.card}
    onSubmit={handleSubmit}
    >
    {/* Row 1: Name and Email */}
    <div
        className="form-name-row"
        style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px"
        }}
    >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label htmlFor="contact-name" style={styles.label}>
            Name
        </label>
        <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            style={styles.input}
            value={formData.name}
            onChange={handleFormChange}
            maxLength={100}
            autoComplete="name"
            required
        />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label htmlFor="contact-email" style={styles.label}>
            Email
        </label>
        <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            style={styles.input}
            value={formData.email}
            onChange={handleFormChange}
            maxLength={254}
            autoComplete="email"
            required
        />
        </div>
    </div>

    {/* Row 2: Subject */}
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
        <label htmlFor="contact-subject" style={styles.label}>
        Subject
        </label>
        <input
        id="contact-subject"
        name="subject"
        type="text"
        placeholder="How can we help?"
        style={styles.input}
        value={formData.subject}
        onChange={handleFormChange}
        maxLength={150}
        required
        />
    </div>

    {/* Row 3: Message */}
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
        <label htmlFor="contact-message" style={styles.label}>
        Message
        </label>
        <textarea
        id="contact-message"
        name="message"
        placeholder="Write your message here..."
        style={styles.textarea}
        value={formData.message}
        onChange={handleFormChange}
        maxLength={5000}
        required
        />
    </div>

    {/* Honeypot: legitimate visitors should leave this empty */}
    <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
        id="contact-website"
        name="website"
        type="text"
        value={formData.website}
        onChange={handleFormChange}
        autoComplete="off"
        tabIndex={-1}
        />
    </div>

    {/* CAPTCHA */}
    <div style={{ marginBottom: "20px" }}>
        <Turnstile
        key={turnstileWidgetKey}
        sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
        onVerify={(token) => setTurnstileToken(token)}
        onExpire={() => setTurnstileToken("")}
        onError={() => setTurnstileToken("")}
        />
    </div>

    {/* Submission status */}
    {status.message && (
        <p
        role="status"
        aria-live="polite"
        className={`form-status form-status--${status.type}`}
        >
        {status.message}
        </p>
    )}

    {/* Submit Button */}
    <button
        type="submit"
        style={styles.button}
        disabled={isSubmitting}
    >
        {isSubmitting ? "Sending..." : "Send Message"}

        <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: "8px" }}
        aria-hidden="true"
        >
        <path
            d="M22 2L11 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    </button>
    </form>

    </div>
    <div className = "bottom-section">
        <h2>Green Youth</h2>
        <p>© 2024 Green Youth Thailand. Empowering the
          next generation of climate leaders.</p>
    </div>
    </>
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