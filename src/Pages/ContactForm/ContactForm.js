import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2'

const ContactForm = () => {
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_2sx154s', 'template_08ncu6k', form.current, 'KP_kKYTCrD-5nwdwl')
    //         .then((result) => {
    //             console.log(result.text);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Massage is sending successfully',
    //             })
    //             e.target.reset()
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return (
        <div> <br></br>
            <p className='text-center'>Get In Touch. Just send me a message, I will get back to you!.</p> <br></br>
            <div className="hero bg-base-100 my-5">
                <div className="">
                    <div className="card w-full shadow-2xl bg-base-200">
                        <div className="card-body">
                       
                            {/* <form ref={form} onSubmit={sendEmail} className='lg:w-80'>
                            </form> */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name: Mahbubur Rahman Bin Amir</span>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email: sazidmr42@gmail.com</span>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone: +8801795628923 | +8801880005123</span>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address: 191/A, KathalBagan Bazar, Dhaka-1205</span>
                                    </label>
                                </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

