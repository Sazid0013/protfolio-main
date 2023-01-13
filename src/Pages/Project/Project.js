import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import gym from '../../Assets/gym.png'
import sth from '../../Assets/sth.png'
import dicc from '../../Assets/dicc.png'


const Project = () => {
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
            <div className="card card-compact mx-auto w-72 lg:w-80 bg-base-200 shadow-xl mb-5">
                <figure className='p-3 rounded-xl'><img src={gym} alt="gym" /></figure>
                <div className="card-body">
                    <h2 className="card-title">The GYM</h2>
                    <p>The Gym - is a personal training website. </p>
                    <p>Technology: React.js | React Query | React Hook Form | Firebase | Tailwind CSS | Bootstrap .</p>
                    <div className="card-actions justify-between items-center bg-base-100 p-3 rounded-xl">
                        <label htmlFor="my-project-1" className='btn btn-xs btn-outline'>Details</label>
                        <a href="https://thy-gym.netlify.app//" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>
            <div className="card card-compact mx-auto w-72 lg:w-80 bg-base-200 shadow-xl mb-5">
                <figure className='p-3 rounded-xl'><img src={sth} alt="kaPhotography" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Search the Headphone</h2>
                    <p>Search the Headphone - is a simple earphone review website</p>
                    <p>Technology: JavaScript | HTML5 | Bootstrap.</p>
                    <div className="card-actions justify-between items-center bg-base-100 p-3 rounded-xl">
                        <label htmlFor="my-project-2" className='btn btn-xs btn-outline'>Details</label>
                        <a href="https://s-t-earphone.netlify.app/home" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>
            <div className="card card-compact mx-auto w-72 lg:w-80 bg-base-200 shadow-xl mb-5">
                <figure className='p-3 rounded-xl'><img src={dicc} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Dhaka International Convention Center</h2>
                    <p>Dhaka International Convention Center - is a simple website</p>
                    <p>Technology: Only HTML and CSS.</p>
                    <div className="card-actions justify-between items-center bg-base-100 p-3 rounded-xl">
                        <label htmlFor="my-project-3" className='btn btn-xs btn-outline'>Details</label>
                        <a href="https://dicc-bd.netlify.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                    
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default Project;