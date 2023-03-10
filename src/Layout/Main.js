import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Main = () => {
    const downloadResume = () => {
        fetch('Mahbubur Rahman-resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Mahbubur Rahman-resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='main'>
            <div className="drawer drawer-end">
                <input id="ka-header-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Header></Header>
                    <div className='grid grid-cols-12'>
                        <div className='hidden lg:grid text-center absolute bottom-0 left-3'>
                            <div className="menu menu-vertical ">
                                <li><a href="https://github.com/Sazid0013" target="blank"><FaGithub /></a></li>
                                <li><a href="https://www.linkedin.com/in/mahbubur-rahman-bin-amir-sazid-270859196/" target="blank"><FaLinkedinIn /></a></li>
                                <li><a href="https://www.facebook.com/mahbuburrahman.sazid" target="blank"><FaFacebook /></a></li>
                                <li><a href="https://www.instagram.com/sazid0013/" target="blank"><FaInstagram /></a></li>
                                <li><a href="https://twitter.com/ShahriarSazid2" target="blank"><FaTwitter /></a></li>
                                <div style={{ writingMode: 'vertical-rl' }}>_________________________</div>
                            </div>
                        </div>
                        <div className='col-start-2 col-span-10'><Outlet></Outlet></div>
                        <div className='hidden lg:grid text-center absolute bottom-0 right-10'>
                            <div style={{ writingMode: 'vertical-rl' }}>sazidmr42@gmail.com _____________________________</div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="ka-header-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 bg-base-100 text-base-content">
                        <li className='place-content-end'><label htmlFor="ka-header-drawer" className="btn btn-sm btn-circle ">???</label></li>
                        <ul className="menu menu-vertical text-center px-1">
                            <li><a href="/#about-me" htmlFor="ka-header-drawer">About</a></li>
                            <li><a href="/#projects">Projects</a></li>
                            <li><a href="/#skills">Skills</a></li>
                            <li><a href="/#contact">Contact</a></li> */
                             <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                        <li><Link onClick={downloadResume} className="btn btn-outline mt-5">Resume</Link></li>
                    </ul>
                </div>
            </div>


        </div >
    );
};

export default Main;