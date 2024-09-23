import React from 'react';
import CoverDiv from '../../../Components/CoverDiv';

const Cover = ({ img, title, about }) => {
    return (
        <div
            className="hero h-[500px] mb-8 "
            style={{
                backgroundImage: `url("${img}")`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center w-2/4 h-2/4"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'

                }}>

                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        {about}
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Cover;