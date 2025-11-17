'use client';
import React, { useState } from 'react';
import { User, Mail, BookText, MessageSquare } from 'lucide-react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, subject, message });
    };

    return (
        <section className="contact-section">
            <div className="map-container">
                <iframe
                    className="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617182998492!2d-73.9878441845941!3d40.7484409793282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625509930919!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                />
            </div>
            <div className="map-overlay"></div>

            <div className="contact-container">
                <div className="contact-form-container">
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Have a question or a project in mind? We&apos;d love to hear from you.
                    </p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="input-group">
                            <User className="input-icon" />
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={name ? 'has-value' : ''}
                                required
                            />
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="input-group">
                            <Mail className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={email ? 'has-value' : ''}
                                required
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="input-group">
                            <BookText className="input-icon" />
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={subject ? 'has-value' : ''}
                                required
                            />
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="input-group">
                            <MessageSquare className="input-icon" />
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className={message ? 'has-value' : ''}
                                required
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>
                        <button type="submit" className="btn-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;