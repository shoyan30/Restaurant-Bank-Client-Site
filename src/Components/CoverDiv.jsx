import React from 'react';

const CoverDiv = ({ title, about }) => {
    return (
        <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
                {about}
            </p>

        </div>
    );
};

export default CoverDiv;