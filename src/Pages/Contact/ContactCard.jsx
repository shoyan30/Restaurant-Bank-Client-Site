import React from 'react';
import { FaAddressBook, FaHome, FaPhone, FaStopwatch, FaSwatchbook, FaTimes } from 'react-icons/fa';

const ContactCard = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 w-3/4 m-auto place-items-center mb-24'>

            <div className='h-64 w-48 text-center shadow-[0_4px_10px_rgba(34,197,94,0.5)] rounded-lg p-4 bg-white flex flex-col'>

                <a href="tel:01887326776" className="w-full mb-2 no-underline">
                    <button className="btn btn-outline btn-success w-full">
                        <FaPhone></FaPhone>
                    </button>
                </a>


                <h1 className="font-bold text-lg mb-2">PHONE</h1>


                <a href="tel:01887326776" className="text-gray-600 no-underline">
                    01887326776
                </a>
                <p className="text-sm text-gray-500 mt-2">
                    Call us anytime for assistance with your queries.
                </p>
            </div>


            <div className='h-64 w-52 text-center shadow-[0_4px_10px_rgba(34,197,94,0.5)] rounded-lg p-4 bg-white flex flex-col'>

                <a href="tel:01887326776" className="w-full mb-2 no-underline">
                    <button className="btn btn-outline btn-success w-full">
                        <FaHome></FaHome>
                    </button>
                </a>


                <h1 className="font-bold text-lg mb-2">ADDRESS</h1>


                <a href="tel:01887326776" className="text-gray-600 no-underline">
                    Hous no-09, Porimon Villa, Sattar Molla Road, Mirpur-12, Dhaka 1216
                </a>

            </div>


            <div className='h-64 w-52 text-center shadow-[0_4px_10px_rgba(34,197,94,0.5)] rounded-lg p-4 bg-white flex flex-col'>

                <a href="tel:01887326776" className="w-full mb-2 no-underline">
                    <button className="btn btn-outline btn-success w-full">
                        <FaSwatchbook></FaSwatchbook>
                    </button>
                </a>


                <h1 className="font-bold text-lg mb-2">WORKING HOUR</h1>



                <p className="text-sm text-gray-500 mt-2">
                    <span>Mon-Thu</span>
                    <span>9 AM - 5 PM</span> <br />
                    <span>Mon-Thu</span>
                    <span>9 AM - 5 PM</span>
                </p>
            </div>
        </div>
    );
};

export default ContactCard;