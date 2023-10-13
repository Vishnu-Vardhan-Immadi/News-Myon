import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-row">
                    <div className="about-us">
                        <h3>News-|-Myon</h3>
                        <p>Your trusted source for the latest news and updates from around the world. Our dedicated team of journalists and editors strive to bring you accurate and reliable news content.</p>
                    </div>
                    <div className="about-us">
                        <h3>About Us</h3>
                        <p>Established and trusted source for the latest news and updates  around the world. Developed in the year 2023, We strive to bring you accurate and reliable news content.</p>
                    </div>
                    <div className="about-us">
                        <h3>Contact Us</h3>
                        <p>Have a question or feedback? We'd love to hear from you. Reach out to our team at <a href="mailto:contact@example.com">contact@example.com</a> or <a href="tel:+123456789">+123456789</a>.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="social-icons">
                    <h3>Follow Us</h3>
                    <a href="/"><i className="fab fa-facebook"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-linkedin"></i></a>
                </div>
                <div className="legal-info">
                    <a href="privacy-policy.html">Privacy Policy</a> | <a href="terms-of-use.html">Terms of Use</a><br />
                    &copy; {new Date().getFullYear()} News-|-Myon. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
