import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h1 className="footer-header">MovieDB</h1>
            </div>
            <hr />
            <ul className="footer-list">
                <li className="footer-item">
                    <Link className="footer-link" to="/">Youtube</Link>
                </li>
                <li className="footer-item">
                    <Link className="footer-link" to="/">Twitter</Link>
                </li>
                <li className="footer-item">
                    <Link className="footer-link" to="/">Instagram</Link>
                </li>
                <li className="footer-item">
                    <Link className="footer-link" to="/">Facebook</Link>
                </li>
            </ul>
            <div className="footer-copyright">
                <p>Copyright &copy; 2021 Vamshi krishna.</p>
            </div>
        </footer>
    )
}

export default Footer;