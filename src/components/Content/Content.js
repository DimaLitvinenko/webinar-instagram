import React from 'react';
import { Photos } from '../Photos';
import { Profile } from '../Profile/Profile';

export const Content = () => {
    return (
        <div className = 'content'>
            <Profile />
            <Photos />
        </div>
    );
};
