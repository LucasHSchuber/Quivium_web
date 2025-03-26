import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import _env from '../ts/env.tsx';
console.log('_env', _env);

import "../css/components.css"
import "../css/buttons.css"

interface ContactModalProps {
    showContactModal: boolean;
    onClose: () => void;
    onSuccess: () => void;
  }

const ContactModal = ({ showContactModal, onClose, onSuccess }: ContactModalProps) => {
    // define  states
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [messageErrorBorder, setMessageErrorBorder] = useState(false);
    const [emailErrorBorder, setEmailErrorBorder] = useState(false);

    const handleOnClose = () => {
        setEmailErrorBorder(false)
        setMessageErrorBorder(false)
        setEmail("")    
        setMessage("")
        onClose()
    };

    const handleOnSuccess = () => {
        setEmailErrorBorder(false)
        setMessageErrorBorder(false)
        setEmail("")    
        setMessage("")
        setLoading(false)
        onSuccess()
        onClose()
    }


    const handleSendMessage = async () => {
        if ((!message || message === "") || (!email || email === "")) {
            console.log("Missing reqiured data")
            if (!email || email === "") {
                console.log("Email is reqiured")
                setEmailErrorBorder(true)
            }
            if (!message || message === "") {
                console.log("Message is reqiured")
                setMessageErrorBorder(true)
            }
            return;
        }
    
        try {
            console.log('navigator.language', navigator.language);
            const lang  = navigator.language;
            fetch(`${_env.API_URL}send-email-contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ lang, email, message }),
            })
            handleOnSuccess();
        } catch (error) {
            console.error("Error:", error);
        }        
    };

    const handleSetEmail = (value: string) => {
        console.log('value', value);
        setEmailErrorBorder(false);
        setEmail(value)
    };

    const handleSetMessage = (value: string) => {
        console.log('value', value);
        setMessageErrorBorder(false);
        setMessage(value)
    };



    return (
        <Modal
            style={{  }}
            show={showContactModal}
            onHide={handleOnClose}
        >
            <Modal.Header style={{ height: "4.2em", margin: 'auto', paddingTop: "2em" }}>
                <h6 style={{ fontSize: "1.4em", fontWeight: "600" }}>Contact</h6>
            </Modal.Header>
            <div className='mt-2' style={{ padding: "0.75em 1.5em" }}>
                <p style={{ fontSize: "0.8em", fontWeight: "400", textAlign: "center" }}>Send us a message if you have any questions, feedback or ideas for improvements. We'll get back to you shortly!</p>
            </div>
            <Modal.Body >
                <div className='modal-body mt-2'>
                    <div className='mb-4' style={{ display: "flex", flexDirection: "column" }}>
                        <h6 style={{ fontSize: "0.8em" }}>Email:</h6>
                        <input type='email' className={`form-input-field-contact-modal`} style={{ border: emailErrorBorder ? "1px solid red" : " 1px solid #afafaf" }} placeholder='Your email' onChange={(e) => handleSetEmail(e.target.value)}></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h6 style={{ fontSize: "0.8em" }}>Message:</h6>
                        <textarea rows={4} className='textarea-contact-modal' style={{ border: messageErrorBorder ? "1px solid red" : " 1px solid #afafaf" }} placeholder='Your message' onChange={(e) => handleSetMessage(e.target.value)}></textarea>
                    </div>
                </div>
            </Modal.Body>
            <div className="mb-4 d-flex justify-content-center" style={{ padding: '0 1em 1em 1em' }}>
                <button disabled={loading} className="contact-cancel-button mr-2" onClick={handleOnClose}>
                    Close
                </button>
                <button disabled={loading} className={`contact-button ${loading ? "savemodal-button-loading" : ""}`} onClick={handleSendMessage} >
                    Send
                </button>
            </div>
        </Modal>
    );
};

export default ContactModal;
