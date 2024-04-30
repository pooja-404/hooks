// import React from 'react'
import React, { useState } from "react";
function Appcounter() {
    const [count, setCount] = useState(0);
    return (

        <div>
            <h2 className="fs-60 fw-bold text-blue text-center ">Usestate</h2>
            <div className="d-fl ex justify-content-center " >
                <h2 className="text-center">{count} likes</h2>
                <div className="d-flex justify-content-center">
                    <span onClick={() => setCount(count + 1)} className="cursor-pointer fs-60 text-center ">👍🏽</span>
                    <span onClick={() => setCount(count - 1)} className="cursor-pointer fs-60 text-center ">👎🏽</span>
                </div>
                <h3 className="text-center">Like or dislike to increase/decrease</h3>
            </div>

        </div>
    )
}

export default Appcounter
