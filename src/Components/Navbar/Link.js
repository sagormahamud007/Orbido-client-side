import React, { useState } from 'react';


const Link = ({route}) => {

    return (
        <div className='mr-12 mt-3'>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;