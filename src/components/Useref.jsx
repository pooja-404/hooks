// import React, { useState, useEffect, useRef } from 'react';

// function Useref() {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     const savePreviousCount = useRef(() => { });

//     useEffect(() => {
//         count.current = count.current + 1;
//         savePreviousCount.current(count.current - 1);
//     });

//     return (
//         <div>
//             <div className='d-flex justify-content-center'>
//                 <input
//                     className='text-center'
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                 />
//             </div>
//             <h1 className='text-center'>Render Count: {count.current}</h1>
//             <h1 className='text-center'>Previous Count: {savePreviousCount.current}</h1>
//         </div>
//     );
// }

// export default Useref;
import React, { useState, useEffect, useRef } from 'react';

function Useref() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };
    return (
        <div className='pt-5'>
            <h2 className="fs-60 fw-bold text-blue text-center ">Useref</h2>
            <div className='d-flex justify-content-center'>
                <input
                    className='text-center border-radius '
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a somthing" 
                />
                <button onClick={handleAddTodo} className='fw-medium border-radius'>Add</button>
            </div>
            <h1 className='text-center'>Todo List</h1>
            <ul className='text-center'>
                {todos.map((todo, index) => (
                    <p className='text-decoration-none mb-0 fw-medium' key={index}>{todo}</p>
                ))}
            </ul>
            <h1 className='text-center'>Render Count: {count.current}</h1>
        </div>
    );
}

export default Useref;
