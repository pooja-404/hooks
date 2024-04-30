import React from 'react'
import { useState, useEffect } from 'react';

function Useeffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },);

    return (
        <div className='pt-5'>
            <h2 className="fs-60 fw-bold text-blue text-center ">Useeffect</h2>
            <div className='d-flex justify-content-center'>
                <h1>I've rendered {count} times!</h1>
            </div>
        </div>
    )
}

export default Useeffect
