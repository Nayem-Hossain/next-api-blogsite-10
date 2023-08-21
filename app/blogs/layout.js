import Sidebar from '@/app/components/Sidebar';
import React from 'react';

const bloglayout = ({ children }) => {
    return (
        <div className='flex gap-4'>
            <div> <Sidebar /></div>
            <div>{children}</div>
        </div>
    );
};

export default bloglayout;