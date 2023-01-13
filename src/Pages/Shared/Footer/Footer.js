import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <div className="menu menu-horizontal lg:hidden">
                    <li><a href="https://github.com/Sazid0013" target="blank"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/mahbubur-rahman-bin-amir-sazid-270859196/" target="blank"><FaLinkedinIn /></a></li>
                    <li><a href="https://www.facebook.com/mahbuburrahman.sazid" target="blank"><FaFacebook /></a></li>
                    <li><a href="https://www.instagram.com/sazid0013/" target="blank"><FaInstagram /></a></li>
                    <li><a href="https://twitter.com/ShahriarSazid2" target="blank"><FaTwitter /></a></li>
                </div>
                <div>
                    <br></br>
                    <p>Copyright © 2022 - All right reserved by <a href='https://github.com/Sazid0013'> <b> M.R.B.A SAZID </b> </a> </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;