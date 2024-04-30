import React, { useState } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='box container border-radius2 mt-5'>
            <div className={isDarkMode ? "dark-mode" : ""}>
                <div className=''>
                    <h2>Toggle Dark/Light Mode</h2>
                    <p>Click the button to toggle between dark and light mode for this box.</p>
                    <button onClick={toggleDarkMode} className='togal-btn'>Toggle dark mode</button>
                </div>
            </div>
        </div>
    );
}

export default DarkModeToggle;