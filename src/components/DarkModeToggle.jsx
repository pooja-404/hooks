import React, { useState } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='box container bg-yellow border-radius2 my-5'>
            <div className={isDarkMode ? "dark-mode" : ""}>
                <div className='p-4'>
                    <h2>Toggle Dark/Light Mode</h2>
                    <p>Click the button to toggle between dark and light mode for this box.</p>
                    <button onClick={toggleDarkMode} className='border-radius bg-pink border-0 p-3 '>Toggle dark mode</button>
                </div>
            </div>
        </div>
    );
}

export default DarkModeToggle;