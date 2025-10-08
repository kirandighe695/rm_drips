import { useState, useEffect } from 'react';
import logo from '../../styles/assests/rmdriplogo.png';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        display: 'block',
        padding: '4px 0'
    };

    const hoverStyle = { color: '#f8f9fa' };

    return (
        <footer style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '20px 0 10px',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            lineHeight: '1.5'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '0 20px',
                marginBottom: '30px'
            }}>
                <div style={{
                    flex: '1',
                    paddingRight: '40px',
                    borderRight: '1px solid rgba(255,255,255,0.2)',
                    minWidth: '0'
                }}>
                    <h3 style={{
                        margin: '0 0 15px 0',
                        fontSize: '18px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>Company in Glance</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                About Us
                            </a>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Company Leaderships
                            </a>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Achievements
                            </a>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{
                    flex: '1',
                    paddingLeft: '40px',
                    minWidth: '0'
                }}>
                    <h3 style={{
                        margin: '0 0 15px 0',
                        fontSize: '18px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>Our Products</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Drip Irrigation
                            </a>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Sprinkler Irrigation
                            </a>
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Filters
                            </a>
                        </li>
                    </ul>
                </div>

                <div style={{
                    flex: '2',
                    paddingLeft: '40px',
                    minWidth: '0'
                }}>
                    <div style={{ flex: '0 0 auto' }}>
                        <img src={logo} alt="R M Drip Logo" style={{ height: '70px', width: 'auto' }} />
                    </div>
                    <div style={{ flex: '1' }}>
                        <p style={{
                            margin: 0,
                            fontSize: '14px',
                            lineHeight: '1.6',
                            fontStyle: 'italic'
                        }}>
                            We, the team of R M Drip & Sprinkler Systems Ltd, provide customers with quality irrigation products with wide requirements consistently.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                fontSize: '13px',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '15px'
            }}>
                <p style={{ margin: 0, opacity: 0.9 }}>R M Drip & Sprinklers Systems Ltd 2022 All rights reserved</p>
                <p style={{ margin: 0, opacity: 0.9 }}>Designed by LBM Infotech</p>
            </div>
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        backgroundColor: '#1e632eff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        fontSize: '18px',
                        boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#218838';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#28a745';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;