// ProgressBar.js

import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div style={{ width: '100%', backgroundColor: '#e0e0df' }}>
            <div
                style={{
                    height: '20px',
                    width: `${progress}%`,
                    backgroundColor: '#3b5998',
                    transition: 'width 0.5s ease'
                }}
            />
        </div>
    );
};

export default ProgressBar;