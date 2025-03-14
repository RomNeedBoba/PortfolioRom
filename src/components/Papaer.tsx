import React from 'react';
import '../styles/Paper.css';

const Paper: React.FC = () => {
    return (
        <div className="paper-container">
            <h1 className="paper-headline">Paper</h1>
            <hr className="underline" />
            <div className="paper-content">
                <p>This is the paper session where I will display my paper.</p>
                <a href="/path-to-your-paper.pdf" target="_blank" rel="noopener noreferrer" className="paper-link">
                    View Paper
                </a>
            </div>
        </div>
    );
};

export default Paper;