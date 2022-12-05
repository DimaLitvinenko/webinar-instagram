import React from 'react';

export const Story = ({ src, message }) => {
    return (
        <div className = 'story'>
            <div>
                <img src = { src } />
            </div>
            <span>{ message }</span>
        </div>
    );
};
